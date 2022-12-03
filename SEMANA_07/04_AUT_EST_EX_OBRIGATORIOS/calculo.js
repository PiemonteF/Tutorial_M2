function calcularReformaAzuleijos() {
    alturaParede = parseFloat(document.getElementById("alturaParede").value);
    larguraParede = parseFloat(document.getElementById("larguraParede").value);
    alturaAzuleijo = parseFloat(document.getElementById("alturaAzuleijo").value);
    larguraAzuleijo = parseFloat(document.getElementById("larguraAzuleijo").value);

    qtdAzuleijosAltura = alturaParede / alturaAzuleijo
    qtdAzuleijosLargura = larguraParede / larguraAzuleijo

    qtdAzuleijos = Math.ceil(qtdAzuleijosAltura * qtdAzuleijosLargura)

    document.getElementById("resultadoSobra").innerHTML = qtdAzuleijos;
}

function calcularReformaAzuleijosSobra(){
    qtdAzuleijosSobra = Math.ceil(qtdAzuleijosAltura * qtdAzuleijosLargura * 1.05)

    document.getElementById("resultadoSemSobra").innerHTML = qtdAzuleijosSobra;
}


// function mostrarPi(){
    

    
// }

function palindromo(){
    coletaNumero = document.getElementById("number").value;
    boleano = true;

    for (let i = 0; i < Math.ceil(coletaNumero.length/2)+1; i++){
        if (coletaNumero[i] == coletaNumero[coletaNumero.length - (i+1)]){
            boleano = true;
        }
        else{
            boleano = false;
            break;
        }
    }

    if (boleano == true){
        document.getElementById("resultadoPalindromo").innerHTML = "é palindromo"
    }
    else{
        document.getElementById("resultadoPalindromo").innerHTML = "n é palindromo"
    }
}

function tabuada(){
    inicioNumero = parseInt(document.getElementById("inicioNumero").value);
    finalizarNumero = parseInt(document.getElementById("finalizarNumero").value);
    numeroTabuada = parseInt(document.getElementById("numeroTabuada").value);

    stringTabuada = "";
    for (let i = inicioNumero; i <= finalizarNumero; i++){
        stringTabuada += i + " X " + numeroTabuada + " = " + i * numeroTabuada + "<br>";
    }
    document.getElementById("tabelaTabuada").innerHTML = stringTabuada

}

function doPi(){
    numero = parseInt(document.getElementById("number").value);
    luiz = Math.ceil(numero/3)
    stringPi = ""
    
    for (let i = 0; i <= luiz; i++){
        stringPi += (3*i+1) + "-" + (3*i+2) + "-" + (3*i+3) + "PI";
    }
 
    document.getElementById("resultadoPi").innerHTML = stringPi;
}