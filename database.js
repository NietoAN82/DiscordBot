//Add the mysql and fs modules
const mysql = require('mysql');
const fs = require("fs");
require('dotenv').config();


//MySQL Connection to online database.
const connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});


//function for inserting quotes from a text file
function insertTable(quote, source) {
  let text = fs.readFileSync(`./source/${source}"`).toString('utf-8').split('\n');
  let newArr = quote;
  for(let i = 0; i < text.length; i++){
    newArr[i] = new Array (text[i])
    
  }
  const sql = `INSERT INTO quotes (quoteName) VALUES ?`;
  connection.query(sql, [quote], (err, result) => {
    if (err) throw err;
    console.log('Number of records inserted: ' + result.affectedRows);
  });
    
}


//function to get random quote from database.
function getRandQuotes() {
  return new Promise((resolve, reject)=>{
    const sql = `SELECT * FROM quotes`;
	  connection.query(sql, (err, result)=>{
    if (err) throw err;
    let resultArr = Object.values(result);
    //console.log(resultArr);
    const rand = Math.floor(Math.random() * (resultArr.length - 1));
    const resul = JSON.parse(JSON.stringify(result));
    resolve(resul[rand].quoteName);
  })
  })
  
}


module.exports = { getRandQuotes };







