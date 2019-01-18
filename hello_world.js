`use strict`
var Pool = require('pg').Pool;
var config = {
    host : 'localhost', 
    user : 'sammy', 
    password : '123123',
    database : 'sammy',
};

var pool = new Pool(config);

async function get_hits(table, resq, first, second){
    try {                
        var response = await pool.query(resq, [first, second]);
        console.log(response.rows);
    }
    catch(e){
        console.error("ERROR: ", e);
    }
}

var first = 12;
var second = 'g';
var table = "sammy_users";
var resq = "INSERT INTO " + table + " (users_id, name) VALUES ($1, $2)";
get_hits(table, resq, first, second);