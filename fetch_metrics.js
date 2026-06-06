const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');

async function fetchGscMetrics() {
  try {
    // This will pick up the ADC credentials from GOOGLE_APPLICATION_CREDENTIALS
    const auth = new GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/webmasters']
    });
    const authClient = await auth.getClient();
    
    const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });
    
    // 1. List sites
    console.log('--- Accessible GSC Sites ---');
    const sites = await searchconsole.sites.list();
    console.log(sites.data.siteEntry.map(s => s.siteUrl));

    console.log('\n--- Preliminary Check: Accessing Metrics ---');
    console.log('API Client initialized for analytics queries.');

  } catch (err) {
    console.error('API Error:', err.message);
  }
}

fetchGscMetrics();
