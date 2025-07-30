import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();
admin.initializeApp();

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

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
      const acfData = payload.acf_data?.[0] || {};
      const postType = payload.post_type || "pillar_page"; // Default to pillar_page if undefined

      const pillarPagesRef = admin.firestore().collection("pillarPages");
      const snapshot = await pillarPagesRef.where("id", "==", postId).limit(1).get();

      const dataToSet = {
        id: postId,
        slug: postSlug,
        type: postType,
        ...acfData,
      };

      if (!snapshot.empty) {
        // Update existing document
        const docId = snapshot.docs[0].id;
        await pillarPagesRef.doc(docId).set(dataToSet, { merge: true });
        logger.info(`Updated pillar page for post_id ${postId}`, { structuredData: true });
      } else {
        // Create new document
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