'use strict';

var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Imports the Google Cloud client library
const BigQuery = require('@google-cloud/bigquery');

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
 const projectId = "gcp-hackathon18-icn-2906";
 const sqlQuery = `SELECT category 
FROM \`bigquery-public-data.san_francisco_311.311_service_requests\` 
WHERE category like '%General%' 
GROUP BY category 
LIMIT 10`;

// Creates a client
const bigquery = new BigQuery({
  projectId: projectId,
});

// Query options list: https://cloud.google.com/bigquery/docs/reference/v2/jobs/query
const options = {
  query: sqlQuery,
  timeoutMs: 10000, // Time out after 10 seconds.
  useLegacySql: false, // Use standard SQL syntax for queries.
};

const GOOGLE_APPLICATION_CREDENTIALS = "../GCP Hackathon Korea 2906-4c296f469273.json";

bigquery
  .query(options)
  .then(results => {
    const rows = results[0];
    console.log('Rows:');
    let output = rows;
    const fs = require('fs');
    const content = JSON.stringify(output);

    let data = JSON.stringify(output);
    fs.writeFileSync('outputtest.json', data); 
 
    rows.forEach(row => console.log(row));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

module.exports = router;
