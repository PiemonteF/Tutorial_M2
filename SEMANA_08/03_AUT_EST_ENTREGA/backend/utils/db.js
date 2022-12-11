const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(path.join(__dirname, "../data/curriculo.db"), err => {
    if (err){
        return console.log(err.message);
    }else{
        console.log("Successful connection to the database 'mrv_project.db'")
    }
});

module.exports = db;