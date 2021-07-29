
const fetch = require('node-fetch');
const mysql = require('mysql');
const fs = require("fs");
let text = fs.readFileSync("./quotes.txt").toString('utf-8');
let arr = text.split();
console.log(arr);
const connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'gEXwClf9F0',
  password: '36xcqpqZdz',
  database: 'gEXwClf9F0'
});



const sadWords = ["sad", "depressed", "unhappy", "angry"]

const starterEncouragements = [
  "Cheer Up!",
  "Hang in there.]",
  "You are a great person / bot!"
];

function createTable(tableName,dataName,dataType){
  const sql = `CREATE TABLE ${tableName} (${dataName} ${dataType})`
  connection.query(sql,(err,result) => {
    if (err) throw err;
    console.log("Table Created");
  })
}
let arr2 = [['Hello matey'], ['Quote 2']];
function insertTable(tableName, dataName, array) {
  const sql = `INSERT INTO ${tableName} (${dataName}) VALUES ?`;
  connection.query(sql, [array], (err, result) => {
    if (err) throw err;
    console.log('Number of records inserted: ' + result.affectedRows);
  });
    
}

function get(tableName){
  const sql =  `SELECT * FROM ${tableName}`;
  connection.query(sql,(err,result) => {
    if (err) throw err;
    console.log(result);
  })
 }

function getQuotes(tableName){
  const sql = `SELECT * FROM ${tableName}`;
  connection.query(sql, (err,result)=>{
    if (err) throw err;
    console.log(JSON.stringify(result).split());
  })
}
//insertTable('test', 'first', arr2);
getQuotes('test');

