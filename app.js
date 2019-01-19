//main conf
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var usersController = require('./controllers/users');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//

var config = {
    host : 'localhost', 
    user : 'sammy',
    password : '123123',
    database : 'sammy',
};
var pool = new Pool(config);

//get request

//

//checkdb
async function it_has(app, nick){
    try {
        var response = await pool.query("SELECT nick FROM main_t WHERE nick=$1", [nick]);                          
        return response.rows.length!=0;
    }
    catch(e){
        console.error("ERROR: ", e);
    }    
}
//+

//make response
async function it_has_response(app, ){
    try {
        app.get('/', function(req, res){
            res.send();
        }); 
    }
    catch(e){
        console.error("ERROR: ", e);
    }    
}
//

async function signUp(app, nick, password){
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
//
var nick = 'lol';
var password = 'kek';
//signUp(app, nick, password);
// if (it_has('lol')){
//     it_has_response();
// } else {
//     signUp(app, nick, password);
// }
app.get('/user/:id', function(req, res){
    res.send('test');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });




