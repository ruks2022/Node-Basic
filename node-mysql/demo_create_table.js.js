var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user: "root",
    pass : "",
    database : "mydb"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connect!");
    var sql = "CREATE TABLE customers(name VARCHAR(225), address VARCHAR(225))";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table created!");

    })
});
