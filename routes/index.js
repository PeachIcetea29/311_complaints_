'use strict';

var express = require('express');
var router = express.Router();
const fs = require('fs');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.189.146.14",
  user: "root",
  password: "311",
  database: "house"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/search', function (req, res) {
  var result = req.body;
  var rows ="";
  
  var select = result.select;
  var from = result.from;
  var where = result.where;
  var r = [];
  //"SELECT location FROM sf LIMIT 5;"
  //"SELECT " + select + " FROM " + from + " WHERE " + where + ";"
  con.query("SELECT location FROM sf LIMIT 5;" , function (err, result, fields) {
    if (err) throw err; 
    Object.keys(result).forEach(function(key) {
      var row = result[key];
      r.push(row.location);
    });
    var body = new Object();
    body.result = true;
    body.data = r;
    res.json(body);
  });
  //var rows =  con.query("SELECT " + select + " FROM sf LIMIT 2");
  
});

/*

// Imports the Google Cloud client library
const BigQuery = require('@google-cloud/bigquery');

 const projectId = "gcp-hackathon18-icn-2906";
 const sqlQuery = `SELECT unique_key,created_date,closed_date,category,complaint_type,incident_address,location
 FROM \`bigquery-public-data.san_francisco_311.311_service_requests\` 
WHERE incident_address <> 'Not associated with a specific address' and category IN ('Street and Sidewalk Cleaning','Graffiti','Litter Receptacles', 'Sewer Issues','Street Defects', 'Damaged Property','Homeless Concerns','Streetlights','Catch Basin Maintenance','Blocked Street or SideWalk','Abandoned Vehicle','Sidewalk or Curb','Noise Report','Illegal Postings') AND created_date >= "2018-01-01 00:00:00"`;

const bigquery = new BigQuery({
  projectId: projectId,
});

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
 
    console.log("fin");
    //rows.forEach(row => console.log(row));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
*/
module.exports = router;
