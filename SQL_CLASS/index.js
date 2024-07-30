const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test_sql',
  password:'5263'
});

let q =""

try{
  connection.query("SHOW TABLES", (err,result)=>{
    if(err) throw err;
    console.log(result)
    console.timeLog(result.length);
  
  })
} catch(err){
  console.log(err);
}
connection.end();

let  getRandomUser=  ()=> {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
     
    };
  }
