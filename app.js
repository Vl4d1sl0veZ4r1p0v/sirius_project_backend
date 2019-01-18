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
var Table = "main_t";
var pool = new Pool(config);
//
async function get_hits(request, args){
    try {
        var response = await pool.query(request, args);
        app.get('/', function(req, res){
            res.send(JSON.stringify(response.rows));
        });
        console.log(response.rows);
    }
    catch(e){
        console.error("ERROR: ", e);
    }
}
//register
function signUp(nick, password){
    var request = "INSERT INTO $table (nick, passwd) VALUES ($nick, $passwd)";
    var args = [Table, nick, password];
    get_hits(request, args);
    return 0;
}
//

//checkdb
//

//get request
//

//make response
//


//Chunck
// var req = "INSERT INTO sammy_users (users_id, name) VALUES (11, 'v')";
// db.one(req)
//     .then(function (data) {
//         console.log("DATA:", data.value);
//     })
//     .catch(function (error) {
//         console.log("ERROR:", error);
//     });
// //
// var obj = [
// {
//     'name': 'Igor',
//     'surname': 'Drujinin'
// },
// {
//     'name': 'Igor',
//     'surname': 'Drujinin'
// }];

// app.get('/', function (req, res) {
//     res.send(JSON.stringify(obj));
//   });

// app.listen(port, function () {
//       console.log(`Example app listening on port ${port}!`);
// });

