const express = require('express'); 
const app = express();
//const bodyParser = require('body-parser');


const hostname = '127.0.0.1';
const port = 3000;



app.use(express.static("../frontend"));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use("/formacao", require("./routes/formacao"));
app.use("/habilidade", require("./routes/habilidade"));
app.use("/experiencia", require("./routes/experiencia"));
app.use("/personalidade", require("./routes/personalidade"));
app.use("/realizacao", require("./routes/realizacao"));
//erro
app.use((req, res, next) => {
    const err = new Error("Não encontrado");
    err.status = 404;

    next(err);
});

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status);

    res.send("Erro " + status + " ocorrido: " + (err.message || err.toString()));
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});