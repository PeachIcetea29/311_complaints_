var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.189.146.14",
  user: "root",
  password: "311"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
