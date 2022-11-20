const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
    const urlencodedParser = bodyParser.urlencoded({ extended: false })

const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../backend/curriculo.db'; 

app.use(express.static("../frontend"));

app.use(express.json());
app.get('/formacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); 
    var sql = 'SELECT id_usuario, curso, descricao, data_inicio, data_fim FROM formacao ORDER BY data_fim DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); 
});

app.post('/inserirformacao', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    sql = "INSERT INTO formacao (curso, data_inicio, data_fim, descricao) VALUES ('" + req.body.curso + "', '" + req.body.data_init + "', '" + req.body.data_fim + "', '" + req.body.descricao + "')";
    console.log(sql);

    db.run(sql, [], err => {
        if(err){
            throw err;
        }
    });
    res.write('<p>FORMAÇÃO INSERIDA COM SUCESSO!<p><a href="/">VOLTAR</a>');
    db.close();
    res.end();
});

app.get('/atualizarformacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM formacao WHERE id_usuario ="+ req.query.id_usuario;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH);
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close();
})

app.post('/atualizarformacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "UPDATE formacao SET curso='" + req.body.curso + "', data_inicio = '" + req.body.data_init + "' , data_fim='" + req.body.data_fim + "', descricao = '" + req.body.descricao +  "'  WHERE id_usuario='" + req.body.id_usuario + "'";
	console.log(sql);
	
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>FORMAÇÃO ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});


app.get('/removerformacao', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Acess-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    sql = "DELETE FROM formacao WHERE id_usuario = '" + req.query.id_usuario + "'";
    console.log(sql);

    db.run(sql, [], err => {
        if(err){
            throw err;
        }
        res.write('<p>EXPERIENCIA REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end;
    });
    db.close();
})


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});