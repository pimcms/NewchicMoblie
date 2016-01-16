var mysql = require('mysql');
var connection = mysql.createConnection({
	//host:'192.168.6.239',
	host:'localhost',
	user:'root',
	//password:'bg43491616',
	password:'',
	port:'3306',
	database:'product'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

module.exports = connection;
//connection.end();

/*connection.connect(function(err){
	if(err){
		console.log(err);
	}else{
		console.log('OK');
	}
});

connection.query('CREATE DATABASE NEWCHIC',function(err,res){
	if(err){
		console.log(err);
	}else{
		console.log('OK');
	}
})*/