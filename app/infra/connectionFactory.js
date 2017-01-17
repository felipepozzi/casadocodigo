var mysql = require('mysql');

var connectMYSQL = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'casadocodigo_nodejs'
    });
}

//wrapper
module.exports = function(){
  return connectMYSQL;
}
