const express = require("express");
const db = require("../utils/db");
const router = express.Router();

router.get('/realizacao', (req, res) => {
    //res.statusCode = 200;
    //res.setHeader('Access-Control-Allow-Origin', '*'); 
    const sql = `
            SELECT * 
            FROM realizacao`;

    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

router.post('/inserirRealizacao', (req, res) => {
    let realizacao = req.body["realizacao"];
    let ano = req.body["ano"];
    let descricao = req.body["descricao"];


    sql = `
        INSERT INTO realizacao 
        (realizacao, ano, descricao) 
        VALUES 
        (?, ?, ?)`;
    

    db.run(sql, [realizacao, ano, descricao], err => {
        if(err){
            throw err;
        }
    });
    res.write('<p>FORMAÇÃO INSERIDA COM SUCESSO!<p><a href="/">VOLTAR</a>');
    res.end();
});

module.exports = router;