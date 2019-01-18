//main conf
var express = require('express');
var app = express();
var port = 3000;
//
var Pool = require('pg').Pool;
var config = {
    host : 'localhost', 
    user : 'sammy',
    password : '123123',
    database : 'sammy',
};
var pool = new Pool(config);
//
async function get_hits(app, nick, password){
    try {
        var response = await pool.query("INSERT INTO main_t (nick, passwd) VALUES ($1, $2)", [nick, password]);
        //var response = await pool.query("SELECT * FROM main_t");
        app.get('/', function(req, res){
            res.send(response.rows);
        });        
    }
    catch(e){
        console.error("ERROR: ", e);
        app.get('/', function(req, res){
            res.send("it's has");
    });
    }
}
//register
function signUp(nick, password){
    get_hits(nick, password);
}
//
var nick = 'lol';
var password = 'kek';
signUp(app, nick, password);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
//checkdb
//

//get request
//

//make response
//