var mysql= require('mysql');
connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"adminroot",
    database:"sportal"
});

module.exports=connection;

