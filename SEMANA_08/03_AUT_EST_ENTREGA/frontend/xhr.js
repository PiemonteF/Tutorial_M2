//-----------FORMACAO--------------------
let xhr = new XMLHttpRequest();

xhr.open("GET","/formacao/formacao", true);

xhr.responseType = 'json';

xhr.send();

xhr.onload = function() {
    let res = xhr.response;
    let saida = '';
    res.map(function(FORMACAO) {
        saida += `${FORMACAO.curso} ` + `${FORMACAO.data_inicio}-` + `${FORMACAO.data_fim}; ` + `${FORMACAO.descricao}<br>`;
        saida += ' - <a href="/atualizarFormacao.html?id_usuario=' + `${FORMACAO.id_usuario}`+ `&type=formacao` + '">EDITAR</a>';
        saida += ' | <a href="formacao/removerformacao?id_usuario='+`${FORMACAO.id_usuario}`+'">REMOVER</a></br>';
        console.log('formacao:', FORMACAO);
    });
    document.getElementById('formacao').innerHTML = saida;
};
//----------------HABILIDADE----------------------------
let xhr2 = new XMLHttpRequest();
xhr2.open("GET","/habilidade/habilidade", true);

xhr2.responseType = 'json';

xhr2.send();

xhr2.onload = function() {
    let res = xhr2.response;
    let saida = '';
    res.map(function(HABILIDADE) {
        saida += `${HABILIDADE.habilidade} - ` + `${HABILIDADE.nota}<br>`;
        saida += ' - <a href="/atualizarHabilidade.html?id_usuario=' + `${HABILIDADE.id_usuario}` + '">EDITAR</a>';
        saida += ' | <a href="habilidade/removerHabilidade?id_usuario='+`${HABILIDADE.id_usuario}`+'">REMOVER</a></br>';
    });
    document.getElementById('habilidade').innerHTML = saida;
};

//----------------EXPERIENCIA--------------------
let xhr3 = new XMLHttpRequest();
xhr3.open("GET","/experiencia/experiencia", true);

xhr3.responseType = 'json';

xhr3.send();

xhr3.onload = function() {
    let res = xhr3.response;
    let saida = '';
    res.map(function(EXPERIENCIA) {
        saida += `<h3 aling="justify">${EXPERIENCIA.empresa} | ` + `${EXPERIENCIA.data_inicio}-` + `${EXPERIENCIA.data_fim}; </h3>` + `<h4>${EXPERIENCIA.descricao}</h4>`;
    });
    document.getElementById('experiencia').innerHTML = saida;
};

//---------------PERSONALIDE---------------------

let xhr4 = new XMLHttpRequest();
xhr4.open("GET","/personalidade/personalidade", true);

xhr4.responseType = 'json';

xhr4.send();

xhr4.onload = function() {
    let res = xhr4.response;
    let saida = '';
    res.map(function(PERSONALIDADE) {
        saida += `${PERSONALIDADE.personalidade} - ` + `${PERSONALIDADE.nota}<br>`;
    });
    document.getElementById('personalidade').innerHTML = saida;
};

//--------------REALIZAÇÃO-------------------
let xhr5 = new XMLHttpRequest();
xhr5.open("GET","/realizacao/realizacao", true);

xhr5.responseType = 'json';

xhr5.send();

xhr5.onload = function() {
    let res = xhr5.response;
    let saida = '';
    res.map(function(REALIZACAO) {
        saida += `<h3 aling="justify">${REALIZACAO.realizacao} | ` + `${REALIZACAO.ano}</h3>` + `<h4>${REALIZACAO.descricao}</h4>`;
    });
    document.getElementById('realizacao').innerHTML = saida;
};