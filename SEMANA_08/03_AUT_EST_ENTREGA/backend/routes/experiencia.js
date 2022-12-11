const express = require("express");
const db = require("../utils/db");
const router = express.Router();

router.get('/experiencia', (req, res) => {
    //res.statusCode = 200;
    //res.setHeader('Access-Control-Allow-Origin', '*'); 
    const sql = `
            SELECT * 
            FROM experiencia`;

    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

router.post('/inserirExperiencia', (req, res) => {
    let empresa = req.body["empresa"];
    let data_init = req.body["data_init"];
    let data_fim = req.body["data_fim"];
    let descricao = req.body["descricao"];


    sql = `
        INSERT INTO experiencia 
        (empresa, data_inicio, data_fim, descricao) 
        VALUES 
        (?, ?, ?, ?)`;
    

    db.run(sql, [empresa, data_init, data_fim, descricao], err => {
        if(err){
            throw err;
        }
    });
    res.write('<p>FORMAÇÃO INSERIDA COM SUCESSO!<p><a href="/">VOLTAR</a>');
    res.end();
});

module.exports = router;