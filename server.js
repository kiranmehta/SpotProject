var express = require('express');
var bodyParser = require("body-parser");
var fs = require('fs');
var tableList = require('./data/table.json');   
var employeeMap = require('./data/employee.json');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3001, function () {
  console.log('server listening on port 3000. please open localhost:3000')
})

app.get("/getTableData",function(req,res){
	res.json( tableList );
});

app.get("/getEmployeeData",function(req,res){
	res.json( employeeMap );
});
