const url = '/formacao';

fetch(url).then((response) => {
    return response.json();
}).then((data) => {
    let formacao = data;
    let saida = '';
    console.log('data:', data);
    formacao.map(function(FORMACAO) {
        saida += `${FORMACAO.curso} ` + `${FORMACAO.data_inicio}-` + `${FORMACAO.data_fim}; ` + `${FORMACAO.descricao}<br>`;
        saida += ' - <a href="/atualizar.html?id_usuario=' + `${FORMACAO.id_usuario}` + '">EDITAR</a>';
        saida += ' | <a href="/removerformacao?id_usuario='+`${FORMACAO.id_usuario}`+'">REMOVER</a></br>';
        console.log('formacao:', FORMACAO);
    });
    document.getElementById('resultado').innerHTML = saida;
}).catch(function(error) {
    console.log(error);
});
