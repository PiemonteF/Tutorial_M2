// Calculo para exercicio 1

function valorFuturo(){
    valor = parseFloat(document.getElementById("valorP").value);
    meses = parseFloat(document.getElementById("meses").value);
    taxa = parseFloat(document.getElementById("taxa").value);

    resultado = valor * (1+ (taxa/100)) ** meses;

    document.getElementById("resultado").innerHTML = resultado;
}

function valorPresente(){
    valorF = parseFloat(document.getElementById("valorF").value);
    meses2 = parseFloat(document.getElementById("meses2").value);
    taxa2 = parseFloat(document.getElementById("taxa2").value);

    resultado2 = valorF / (1 + (taxa2/100)) ** meses2;

    document.getElementById("resultado2").innerHTML = resultado2;
}

// Calculo para exercicio 2

function jurosSimples(){
    principal = parseFloat(document.getElementById("capitalInicial").value);
    periodo = parseFloat(document.getElementById("periodo").value);
    taxaJuros = parseFloat(document.getElementById("taxaJuros").value);

    resultadoJurosSimples = principal * (taxaJuros/100) * periodo
    montante = principal + resultadoJurosSimples

    document.getElementById("resultadoJuros").innerHTML = "R$" + resultadoJurosSimples
    document.getElementById("resultadoMontante").innerHTML = "R$" + montante + "\n" + "SE FERROU"
}

// Algoritimo exercicio 3

function fraseDiagonal(){
    let text = document.getElementById("frase").value;
      let result = '';
      let x = 10;
      
      for(let i = 0; i < text.length; i++){
      let result1 = "";
      result1  = text[i] + "<br>";
      
      result  += "<div style='margin-left: "+ x*i + "px'>" + result1 + "</div>";
      
      }
     document.getElementById("fraseMaluca").innerHTML = result;
}

// Algoritimo exercicio 4
function numeroDecimal(){
    let numeroNatural = parseInt(document.getElementById("numeroNatural").value);
    let a;
    let b;
    let c;
    let d;
    let e;
    let f;
    let g;
    let h;

    if(numeroNatural >= 128){
        a=1;
        numeroNatural-=128;
    }else{
        a=0;
    }

    if(numeroNatural < 64 ){
        b=0
    }else{
        b=1;
        numeroNatural-=64;
    }

    if(numeroNatural >= 32){
        c=1;
        numeroNatural-=32;
    }else{
        c=0;    
    }

    if(numeroNatural < 16){
        d=0;
    }else{
        d=1;
        numeroNatural -=16;
    }

    if(numeroNatural >= 8){
        e=1;
        numeroNatural -=8;
    }else{
        e=0;
    }

    if(numeroNatural >= 4){
        f=1;
        numeroNatural -=4;
    }else{
        f=0;
    }

    if(numeroNatural >= 2){
        g=1;
        numeroNatural -=2;
    }else{
        g=0;
    }

    if(numeroNatural >= 1){
        h=1;
    }else{
        h=0;
    }

    document.getElementById("numeroDecimal").innerHTML = String(a)+String(b)+String(c)+String(d)+String(e)+String(f)+String(g)+String(h);

}