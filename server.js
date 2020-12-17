var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session=require('express-session');
const { resourceLimits } = require('worker_threads');

var conn = mysql.createConnection({
    host    :   'localhost',
    user    :   'BBB',
    password:   'BBB',
    database:   'web',
});


app.use(session({
    secret:'secret',
    resave:true,
    resave:true,
    saveUninitialized:true
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

function restrict(req,res,next){
    if(req.session.loggedin){
        next();
    }else {
        req.session.error='Access denied!';
        res.sendFile(path.join(__dirname+'/main/main.html'));
    }
}


app.use(express.static('../BBB'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req,res){
    res.sendFile(__dirname+'/main/main.html');
});

app.post('/signup', function(req,res){
    var ID = req.body.id;
    var PW = req.body.password;
    var PH = req.body.phone;
    var NAME=req.body.name;
    var EMAIL=req.body.email;
    var GENDER=req.body.gender;
    var DATE=req.body.birth;

    var sql='INSERT INTO users (id,password, phone, name, email, gender, birth) VALUES(?,?,?,?,?,?,?)';
    conn.query(sql, [ID,PW, PH, NAME, EMAIL, GENDER, DATE], function(err,rows){
        if(err){
            console.log(err);
            res.status(500).send("ERROR")
        }
        console.log('Signup Success');
        res.redirect('/login');


    });

});

app.get('/login', function(req,res){
    res.sendFile(__dirname+'/main/login.html');
});

app.post('/login', function(req,res){
    var loginID=req.body.loginID;
    var loginPW=req.body.loginPW;
    
    if(loginID && loginPW){
        conn.query('SELECT * FROM users WHERE id=? AND password=?', [loginID,loginPW], function(error,results,fields){
            if(error) throw error;
            if(results.length>0){
                req.session.loggedin=true;
                req.session.loginID=loginID;
                res.redirect('/main');
                res.end();
            } else{
                res.send('<script type="text/javascript"> alert("Login Error"); history.back();</script>');
            }
        });
    } else{
        res.send('<script type="text/javascript"> alert("Please enter Username and Password "); history.back();</script>');
        res.end();
    }

});

app.get('/main', restrict, function(req, res) {
    if (req.session.loggedin) {
       res.sendFile(path.join(__dirname + '/main/main.html'));
    } else {
       res.send('Please login to view this page!');
       res.end();
    }
 });
 



app.listen(3000, function(){
    console.log('Connected 3000 port');
});
