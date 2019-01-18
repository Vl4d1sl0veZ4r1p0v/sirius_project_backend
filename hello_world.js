var Pool = require('pg').Pool;
var config = {
    host : 'localhost', 
    user : 'sammy', 
    password : '123123',
    database : 'sammy',
};

var pool = new Pool(config);

async function get_hits(){
    try {
        var response = await pool.query("INSERT INTO sammy_users (users_id, name) VALUES ($1, $2)", [10, 'V']);
        console.log(response.rows);
    }
    catch(e){
        console.error("ERROR: ", e);
    }
}

get_hits();