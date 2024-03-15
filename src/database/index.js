const mysql = require("mysql2")

const pool = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"library_manager_with_knex"
}).promise()
async function connection(){
    await pool.connect((err)=>{
        if(error){
            throw err
        }
        console.log("MySql connected...")
    })
    pool.destroy()
    
}
module.exports = {connection,pool}