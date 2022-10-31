/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido*/
function calcula(x,y){
    var op = '+';
    var resultado;

    if(op == '+'){
        resultado = x+y
    };
    document.getElementById('saida').innerHTML = `${x} ${op} ${y} = ${resultado}`;
    console.log(`${x} ${op} ${y} = ${resultado}`);
}

function operacao(){
    let num1 = parseInt(document.getElementById('pnumero').value);
    let operacao = document.getElementById('operacao').value;
    let num2 = parseInt(document.getElementById('snumero').value);
    let resultado;
    switch(operacao){
        case '+':
            resultado = num1+num2;
            break;
        case '-':
            resultado = num1-num2;
            break;
        case '*':
            resultado = num1*num2;
            break;
        case '/':
            resultado = num1/num2;
            break;
    };
    document.getElementById('resultado').innerHTML = `${num1} ${operacao} ${num2} = ${resultado}`;
}