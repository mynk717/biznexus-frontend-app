const { google } = require('googleapis');

const keyPath = '/home/mynk/.gemini/creds/indexing-api.json';

const jwtClient = new google.auth.JWT({
  keyFile: keyPath,
  scopes: ['https://www.googleapis.com/auth/indexing'],
  // Ensure the project ID is explicitly passed
  projectId: 'mktdm-outh'
});

async function indexPage(url) {
  try {
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
