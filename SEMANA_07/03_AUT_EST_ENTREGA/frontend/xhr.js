let xhr = new XMLHttpRequest();

xhr.open("GET","/formacao", true);

xhr.responseType = 'json';

xhr.send();

xhr.onload = function() {
    let res = xhr.response;
    let saida = '';
    res.map(function(FORMACAO) {
        saida += `${FORMACAO.curso} ` + `${FORMACAO.data_inicio}-` + `${FORMACAO.data_fim}; ` + `${FORMACAO.descricao}<br>`;
        saida += ' - <a href="/atualizar.html?id_usuario=' + `${FORMACAO.id_usuario}` + '">EDITAR</a>';
        saida += ' | <a href="/removerformacao?id_usuario='+`${FORMACAO.id_usuario}`+'">REMOVER</a></br>';
        console.log('formacao:', FORMACAO);
    });
    document.getElementById('resultado').innerHTML = saida;
};


