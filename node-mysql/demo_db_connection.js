var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
  
  //host: "localhost",
  //user: "yourusername",
  //password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});