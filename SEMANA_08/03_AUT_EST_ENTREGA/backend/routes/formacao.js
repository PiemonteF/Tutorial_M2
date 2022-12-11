const express = require("express");
const db = require("../utils/db");
const router = express.Router();

router.get('/formacao', (req, res) => {
    //res.statusCode = 200;
    //res.setHeader('Access-Control-Allow-Origin', '*'); 
    const sql = 'SELECT id_usuario, curso, descricao, data_inicio, data_fim FROM formacao ORDER BY data_fim DESC';

    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

router.post('/inserirformacao', (req, res) => {
    let curso = req.body["curso"];
    let data_init = req.body["data_init"];
    let data_fim = req.body["data_fim"];
    let descricao = req.body["descricao"];


    sql = `
        INSERT INTO formacao 
        (curso, data_inicio, data_fim, descricao) 
        VALUES 
        (?, ?, ?, ?)`;
    

    db.run(sql, [curso, data_init, data_fim, descricao], err => {
        if(err){
            throw err;
        }
    });
    res.write('<p>FORMAÇÃO INSERIDA COM SUCESSO!<p><a href="/">VOLTAR</a>');
    res.end();
});

router.get('/atualizarformacao', (req, res) => {
    
	const sql = "SELECT * FROM formacao WHERE id_usuario ="+ req.query.id_usuario;
	
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
});

router.post('/atualizarformacao', (req, res) => {
	
	const sql = "UPDATE formacao SET curso='" + req.body.curso + "', data_inicio = '" + req.body.data_init + "' , data_fim='" + req.body.data_fim + "', descricao = '" + req.body.descricao +  "'  WHERE id_usuario='" + req.body.id_usuario + "'";
	
	
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		};
		res.end();
	});
	res.write('<p>FORMAÇÃO ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
});


router.get('/removerformacao', (req, res) => {
    
    const sql = "DELETE FROM formacao WHERE id_usuario = '" + req.query.id_usuario + "'";
    

    db.run(sql, [], err => {
        if(err){
            throw err;
        }
        res.write('<p>EXPERIENCIA REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end;
    });
});

module.exports = router;