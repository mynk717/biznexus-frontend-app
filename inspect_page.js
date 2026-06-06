const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');

async function inspectPage(url) {
  try {
    const auth = new GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
    });
    const authClient = await auth.getClient();
    
    const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });
    
    const res = await searchconsole.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl: url,
        siteUrl: 'https://mdn.mktgdime.com/'
      }
    });
    
    console.log(`\n--- Inspection Result: ${url} ---`);
    console.log('Indexing State:', res.data.inspectionResult.indexStatusResult.verdict);
    console.log('Coverage State:', res.data.inspectionResult.indexStatusResult.coverageState);
    
  } catch (err) {
    console.error(`Error inspecting ${url}:`, err.message);
  }
}

const urls = [
  'https://mdn.mktgdime.com/blog/benefits-seo-digital-marketing-raipur-businesses',
  'https://mdn.mktgdime.com/blog/which-solar-panel-is-best-cheap-comparison-raipur',
  'https://mdn.mktgdime.com/blog/schengen-visa-insurance-raipur-tata-aig',
  'https://mdn.mktgdime.com/blog/raipur-senior-citizen-travel-insurance-guide'
];

async function runAll() {
  for (const url of urls) {
    await inspectPage(url);
  }
}

runAll();
