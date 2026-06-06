const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');

async function testAuth() {
  try {
    // The GoogleAuth library automatically detects GOOGLE_APPLICATION_CREDENTIALS
    const auth = new GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
    });
    const authClient = await auth.getClient();
    
    const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });
    const res = await searchconsole.sites.list();
    
    console.log('Successfully authenticated!');
    console.log('Accessible GSC Sites:', res.data.siteEntry.map(s => s.siteUrl));
  } catch (err) {
    console.error('Auth Error:', err.message);
  }
}
testAuth();
