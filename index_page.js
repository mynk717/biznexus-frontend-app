const { google } = require('googleapis');
const key = require('./.gemini/creds/indexing-api.json');

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  null
);

async function indexPage(url) {
  try {
    const tokens = await jwtClient.authorize();
    const indexing = google.indexing('v3');
    const result = await indexing.urlNotifications.publish({
      auth: jwtClient,
      requestBody: {
        url: url,
        type: 'URL_UPDATED'
      }
    });
    console.log(`Success: ${url} indexed.`, result.data);
  } catch (err) {
    console.error('Error:', err);
  }
}

const urlToIndex = process.argv[2];
if (urlToIndex) {
  indexPage(urlToIndex);
} else {
  console.log('Please provide a URL.');
}
