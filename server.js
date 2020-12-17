var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path=require('path');
var mysql = require('mysql');

var db = mysql.createConnection({
    host    :   'localhost',
    user    :   'BBB',
    password:   'BBB',
    database:   'web',
    port    :   '3000'
});



app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static('../BBB'));

app.get('/', function(req,res){
    res.sendFile(__dirname+'/main/main.html');
})

app.post('/signup', function(req,res){
    var user_ID = req.body.id;
    var user_PW = req.body.password;
    var user_PH = req.body.phone;
    var user_NAME=req.body.name;
    var user_EMAIL=req.body.email;
    var user_GENDER=req.body.gender;
    var user_DATE=req.body.birth;

    var sql='INSERT INTO users (id,password, phone, name, email, gender, created_date '

});

app.listen(3000, function(){
    console.log('Connected 3000 port');
});
