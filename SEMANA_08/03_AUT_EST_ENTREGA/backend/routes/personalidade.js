const express = require("express");
const db = require("../utils/db");
const router = express.Router();

router.get('/personalidade', (req, res) => {
    //res.statusCode = 200;
    //res.setHeader('Access-Control-Allow-Origin', '*'); 
    const sql = `
            SELECT * 
            FROM personalidade`;

    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

router.post('/inserirPersonalidade', (req, res) => {
    let personalidade = req.body["personalidade"];
    let nota = req.body["nota"];


    sql = `
        INSERT INTO personalidade 
        (personalidade, nota) 
        VALUES 
        (?, ?)`;
    

    db.run(sql, [personalidade, nota], err => {
        if(err){
            throw err;
        }
    });
    res.write('<p>FORMAÇÃO INSERIDA COM SUCESSO!<p><a href="/">VOLTAR</a>');
    res.end();
});

module.exports = router;