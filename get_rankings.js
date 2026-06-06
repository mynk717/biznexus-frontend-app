const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');

async function getRankings() {
  try {
    const auth = new GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
    });
    const authClient = await auth.getClient();
    
    const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });
    
    const today = new Date();
    const startDate = new Date();
    startDate.setDate(today.getDate() - 30);
    
    const res = await searchconsole.searchanalytics.query({
      siteUrl: 'https://mdn.mktgdime.com/',
      requestBody: {
        startDate: startDate.toISOString().split('T')[0],
        endDate: today.toISOString().split('T')[0],
        dimensions: ['query'],
        rowLimit: 50
      }
    });
    
    console.log('--- Top Ranking Queries (Last 30 Days) ---');
    console.table(res.data.rows || 'No data found.');
  } catch (err) {
    console.error('API Error:', err.message);
  }
}

getRankings();
