/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const admin = require('firebase-admin');
admin.initializeApp();
const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });
exports.wordpressWebhook = onRequest(async (req, res) => {
    logger.info("WordPress Webhook Received!", {structuredData: true, body: req.body});

    const db = admin.firestore();

    // Ensure this is a POST request, as webhooks typically send POST requests
    if (req.method !== "POST") {
        logger.warn("Received a non-POST request", {method: req.method});
        return res.status(405).send("Method Not Allowed");
    }

    // Ensure request body exists and is valid
    if (!req.body || typeof req.body !== 'object') {
        logger.error("Webhook request body is empty or invalid.", {body: req.body});
        return res.status(400).send("Bad Request: Request body is empty or invalid.");
    }

    const postData = req.body; // The entire webhook payload

   // Extract standard WordPress post data, ensuring defaults if undefined
const wpPost = postData.post || {}; // Get the 'post' object, or an empty object if it doesn't exist

const postId = wpPost.ID || postData.ID || ''; // Prioritize wpPost.ID, then postData.ID, else empty string
const postTitle = wpPost.post_title || postData.post_title || '';
const postContent = wpPost.post_content || postData.post_content || ''; // Ensure it's never undefined, default to empty string
const postStatus = wpPost.post_status || postData.post_status || '';
const postType = wpPost.post_type || postData.post_type || '';

    // IMPORTANT: Check if it's the 'service' custom post type
    if (postType !== 'service') {
        logger.info(`Webhook received for non-service post type: ${postType}. Ignoring.`);
        return res.status(200).send(`Ignoring post type: ${postType}`);
    }

    // Extract Advanced Custom Fields data (using 'acf_data' as found in logs)
    const acfData = postData.acf_data;

    if (!acfData) {
        logger.warn("No ACF data found in webhook payload for service post.", {postId, postTitle});
        // We might still want to process if there's other standard post data,
        // but for now, we log a warning.
    }

    const serviceShortDescription = acfData?.service_short_description || '';
    const serviceFullDetails = acfData?.service_full_details || '';
    const serviceIcon = acfData?.service_icon?.url || ''; // Get 'url' from 'service_icon' object
    const servicePrice = acfData?.service_price || 0;
    
    // Handling the Key Features (which are multiple text fields)
    const keyFeatures = [];
    for (let i = 1; i <= 7; i++) {
        const feature = acfData?.[`key_feature_${i}`];
        if (feature) { // Only add if the feature field has content
            keyFeatures.push(feature);
        }
    }

    // Construct the data object for Firestore
    const firestoreDocData = {
        id: postId, // Store the WordPress ID to easily find it later
        title: postTitle,
        content: postContent, // Main WP content editor content
        status: postStatus,
        type: postType,
        shortDescription: serviceShortDescription,
        fullDetails: serviceFullDetails,
        iconUrl: serviceIcon, // Renamed for clarity in Firestore
        price: servicePrice,
        keyFeatures: keyFeatures, // This will be an array of strings
        lastUpdated: admin.firestore.FieldValue.serverTimestamp() // Timestamp of when it was saved in Firestore
    };

    logger.info("Parsed Webhook Data for Firestore:", {firestoreDocData});

    // --- START OF FIRESTORE SAVING CODE ---
    try {
        // Use the WordPress Post ID as the Firestore Document ID for easy lookup
        await db.collection('services').doc(String(postId)).set(firestoreDocData, { merge: true });
        logger.info(`Service document with ID ${postId} successfully saved/updated in Firestore.`);
        res.status(200).send('Webhook received, parsed, and data saved to Firestore successfully!');
    } catch (error) {
        logger.error("Error saving service data to Firestore:", {error: error.message, postId, postTitle});
        res.status(500).send('Error saving data to Firestore.');
    }
    // --- END OF FIRESTORE SAVING CODE ---
});
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
