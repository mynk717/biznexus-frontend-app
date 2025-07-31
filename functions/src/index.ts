import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();
admin.initializeApp();

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

// Helper function to safely unwrap array values from ACF
function unwrapAcfValue(value: any): any {
  if (Array.isArray(value) && value.length > 0) {
    return value[0]; // Take the first element if it's an array
  }
  return value; // Return as is if not an array or empty array
}

export const wordpressWebhookV2 = onRequest(
  {
    region: "us-central1",
    memory: "1GiB",
    cpu: 1,
    timeoutSeconds: 120,
  },
  async (req, res) => {
    try {
      const payload = req.body;
      logger.info("Received payload:", { structuredData: true, payload });

      if (!payload || !payload.post_id) {
        throw new Error("No valid payload or post_id received");
      }

      const postId = payload.post_id;
      const postSlug = payload.post_name || `post-${postId}`;

      // Enhanced postType handling
      let postType = unwrapAcfValue(payload.post_type);
      if (typeof postType !== "string" || !postType) {
        postType = "pillar_page"; // Fallback to pillar_page if invalid or undefined
        logger.warn("Invalid or missing post_type, defaulting to pillar_page", { structuredData: true, originalValue: payload.post_type });
      }

      let acfData = unwrapAcfValue(payload.acf_data) || {};
      if (typeof acfData !== "object" || acfData === null) {
        acfData = {};
      }
      logger.info("Raw acfData:", { structuredData: true, acfData });

      if (Object.keys(acfData).length === 0) {
        logger.warn("No ACF data found in payload", { structuredData: true, payload });
      }

      const pillarPagesRef = admin.firestore().collection("pillarPages");
      const snapshot = await pillarPagesRef.where("id", "==", postId).limit(1).get();

      const dataToSet = {
        id: postId,
        slug: postSlug,
        type: postType,
        seoTitle: unwrapAcfValue(acfData.seo_title) || "",
        metaDescription: unwrapAcfValue(acfData.meta_description) || "",
        pillarPageFullContent: unwrapAcfValue(acfData.pillar_page_full_content) || "",
        faqSchemaJson: unwrapAcfValue(acfData.faq_schema_json) || "{}",
        post_title: unwrapAcfValue(payload.post_title),
        post_status: unwrapAcfValue(payload.post_status),
        post_date: unwrapAcfValue(payload.post_date),
        post_modified: unwrapAcfValue(payload.post_modified),
        permalink: unwrapAcfValue(payload.permalink),
      };

      if (!snapshot.empty) {
        const docId = snapshot.docs[0].id;
        await pillarPagesRef.doc(docId).set(dataToSet, { merge: true });
        logger.info(`Updated pillar page for post_id ${postId}`, { structuredData: true });
      } else {
        await pillarPagesRef.doc(postSlug).set(dataToSet, { merge: true });
        logger.info(`Created new pillar page for post_id ${postId}`, { structuredData: true });
      }

      res.status(200).send("Data synced successfully");
    } catch (error) {
      logger.error("Error syncing data:", { error: (error as Error).message, structuredData: true });
      res.status(500).send(`Error syncing data: ${(error as Error).message}`);
    }
  }
);