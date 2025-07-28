"use strict";
// functions/src/index.ts
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
exports.wordpressWebhook = void 0;
const functions = __importStar(require("firebase-functions"));
const admin = __importStar(require("firebase-admin"));
// Initialize Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();
// HTTP-triggered function to receive WordPress webhooks
exports.wordpressWebhook = functions.https.onRequest(async (req, res) => {
    // Ensure it's a POST request
    if (req.method !== 'POST') {
        functions.logger.warn('Received non-POST request to webhook:', req.method);
        res.status(405).send('Method Not Allowed');
        return; // Explicitly return void
    }
    try {
        const payload = req.body;
        functions.logger.info('Received WordPress webhook payload:', payload);
        // Extract common post data
        const postId = payload.post_id; // WordPress Post ID
        const postType = payload.post_type; // WordPress Post Type (e.g., 'service', 'pillar_page')
        const postTitle = payload.post_title; // Main post title
        const postSlug = payload.post_name; // Post slug
        // Ensure we have a post ID and type to proceed
        if (!postId || !postType) {
            functions.logger.error('Missing post_id or post_type in webhook payload.');
            res.status(400).send('Missing post_id or post_type');
            return; // Explicitly return void
        }
        // Initialize data to save
        let dataToSave = {
            id: postId,
            post_type: postType,
            post_title: postTitle,
            post_name: postSlug, // slug
            // Add standard fields that might be useful
            post_status: payload.post_status,
            post_date: payload.post_date,
            post_modified: payload.post_modified,
            link: payload.permalink, // WordPress permalink
        };
        // Handle ACF data if present
        if (payload.acf_data) {
            // Process ACF data for 'service' CPT
            if (postType === 'service') {
                functions.logger.info('Processing ACF data for service CPT.');
                const acf = payload.acf_data;
                dataToSave.title = postTitle; // Use post_title as the main 'title' field
                dataToSave.shortDescription = acf.service_short_description || '';
                dataToSave.fullDetails = acf.service_full_details || '';
                dataToSave.iconUrl = acf.service_icon ? acf.service_icon.url : ''; // Ensure URL is extracted
                dataToSave.price = acf.service_price !== undefined ? acf.service_price : null; // Handle number or string
                dataToSave.keyFeatures = [];
                for (let i = 1; i <= 7; i++) {
                    const feature = acf[`key_feature_${i}`];
                    if (feature) {
                        dataToSave.keyFeatures.push(feature);
                    }
                }
                // Add other service-specific fields if they exist in ACF
                dataToSave.longDescription = acf.long_description || ''; // Example
                dataToSave.offerings = acf.offerings || []; // Example
                // Determine Firestore collection based on post type
                const collectionName = 'services';
                const docRef = db.collection(collectionName).doc(String(postId)); // Use postId as document ID
                await docRef.set(dataToSave, { merge: true });
                functions.logger.info(`Service (ID: ${postId}) synced to Firestore collection: ${collectionName}`);
            }
            // Process ACF data for 'pillar_page' CPT
            else if (postType === 'pillar_page') {
                functions.logger.info('Processing ACF data for pillar_page CPT.');
                const acf = payload.acf_data;
                // Map ACF fields to Firestore document fields
                dataToSave.seoTitle = acf.seo_title || '';
                dataToSave.metaDescription = acf.meta_description || '';
                dataToSave.pillarPageFullContent = acf.pillar_page_full_content || '';
                dataToSave.faqSchemaJson = acf.faq_schema_json || '{}'; // Ensure it's a valid JSON string or empty object
                // Determine Firestore collection for pillar pages
                const collectionName = 'pillarPages'; // New collection for pillar pages
                const docRef = db.collection(collectionName).doc(postSlug); // Use slug as document ID for pillar pages
                await docRef.set(dataToSave, { merge: true });
                functions.logger.info(`Pillar Page (Slug: ${postSlug}) synced to Firestore collection: ${collectionName}`);
            }
            // Handle other custom post types if needed
            else {
                functions.logger.info(`Webhook received for unhandled post type: ${postType}. Data not synced.`);
                res.status(200).send(`Webhook received for unhandled post type: ${postType}`);
                return; // Explicitly return void
            }
        }
        else {
            functions.logger.warn('No ACF data found in webhook payload.');
            res.status(200).send('Webhook received, but no ACF data to process.');
            return; // Explicitly return void
        }
        res.status(200).send('Webhook processed successfully!');
        return; // Explicitly return void
    }
    catch (error) {
        functions.logger.error('Error processing WordPress webhook:', error);
        res.status(500).send(`Error processing webhook: ${error.message}`);
        return; // Explicitly return void
    }
});
//# sourceMappingURL=index.js.map