"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordpressWebhookV2 = void 0;
const https_1 = require("firebase-functions/v2/https");
const admin = __importStar(require("firebase-admin"));
const logger = __importStar(require("firebase-functions/logger"));
const dotenv = __importStar(require("dotenv"));
// Load environment variables
dotenv.config();
admin.initializeApp();
const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });
// Helper function to safely unwrap array values from ACF
function unwrapAcfValue(value) {
    if (Array.isArray(value) && value.length > 0) {
        return value[0]; // Take the first element if it's an array
    }
    return value; // Return as is if not an array or empty array
}
exports.wordpressWebhookV2 = (0, https_1.onRequest)({
    region: "us-central1",
    memory: "1GiB",
    cpu: 1,
    timeoutSeconds: 120,
}, async (req, res) => {
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
        }
        else {
            await pillarPagesRef.doc(postSlug).set(dataToSet, { merge: true });
            logger.info(`Created new pillar page for post_id ${postId}`, { structuredData: true });
        }
        res.status(200).send("Data synced successfully");
    }
    catch (error) {
        logger.error("Error syncing data:", { error: error.message, structuredData: true });
        res.status(500).send(`Error syncing data: ${error.message}`);
    }
});
//# sourceMappingURL=index.js.map