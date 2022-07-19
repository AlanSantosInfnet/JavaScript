/*
const buttonQ2 = document.querySelector('#submitQ2')
buttonQ2.addEventListener("click", () => {

    let inicio = new Date().getTime();

    let number = document.querySelector('#num').value;
    fatorial(number);

    let fim = new Date().getTime();
    addValue(number, result, inicio, fim);

});
*/

const q2 = document.querySelector("#q2");
q2.innerHTML = '<h1>QUESTÃO 2</h1>'
+ '<label for="num">Valor</label>'
+ '<input type="number" id="num"> <br>'
+ '<button onClick="addInf()">Calcular</button>'
+ '<div id="respostaQ2"></div>'


function addInf(){
    let inicio = new Date().getTime();

    let number = document.querySelector('#num').value;
    fatorial(number);

    let fim = new Date().getTime();
    addValue(number, result, inicio, fim);
}

function fatorial(num) {
    result = 1;
    while(num>0){
        result = result*num;
        num--;
    }  
    return result;
}

function addValue(number, result, fim, inicio) {
    let resultado = document.querySelector('#q2 #respostaQ2');
    let p =  document.createElement('p');
    p.innerHTML = (`Resultado: ${number}! = ${result} - Tempo: ${fim - inicio} milisegundos`);
    resultado.appendChild(p);
}