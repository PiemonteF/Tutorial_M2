const express = require("express");
const db = require("../utils/db");
const router = express.Router();

router.get('/habilidade', (req, res) => {
    //res.statusCode = 200;
    //res.setHeader('Access-Control-Allow-Origin', '*'); 
    const sql = `
            SELECT * 
            FROM habilidade`;

    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

router.post('/inserirHabilidade', (req, res) => {
    let habilidade = req.body["habilidade"];
    let nota = req.body["nota"];

    sql = `
        INSERT INTO habilidade 
        (habilidade, nota   ) 
        VALUES (?, ?)`;
    

    db.run(sql, [habilidade, nota], err => {
        if(err){
            throw err;
        }
    });
    res.write('<p>HABILIDADE INSERIDA COM SUCESSO!<p><a href="/">VOLTAR</a>');
    res.end();
});

router.get('/atualizarHabilidade', (req, res) => {
    let id_usuario = req.query["id_usuario"]
	const sql = `
            SELECT * 
            FROM habilidade 
            WHERE id_usuario = ?`;
	
	db.all(sql, [id_usuario],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
});

router.post('/atualizarHabilidade', (req, res) => {
	let habilidade = req.body["habilidade"];
    let nota = req.body["nota"];
    let id_usuario = req.body["id_usuario"];


	const sql = `
        UPDATE habilidade 
        SET 
        habilidade = ?,
        nota = ?
        WHERE id_usuario = ?`;
	
	
	db.run(sql, [habilidade, nota, id_usuario],  err => {
		if (err) {
		    throw err;
		};
		res.end();
	});
	res.write('<p>HABILIDADE ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
});


router.get('/removerHabilidade', (req, res) => {
    let id_usuario = req.query["id_usuario"];

    const sql = `
        DELETE FROM habilidade WHERE id_usuario = ?`;
    

    db.run(sql, [id_usuario], err => {
        if(err){
            throw err;
        }
        res.write('<p>HABILIDADE REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end;
    });
});

module.exports = router;