/*
const button4 = document.querySelector('#submitQ4');
button4.addEventListener("click", () => {

    let qtdade = parseInt(document.querySelector('#q4 #qtdade').value);
    let min = parseInt(document.querySelector('#q4 #valorMin').value);
    let max = parseInt(document.querySelector('#q4 #valorMax').value);
    if (qtdade < max - min ){
    let numeros = criarVetorAleatorio(qtdade, min, max);
  
    let resultado = document.querySelector('#q4 #respostaQ4');
    let p = document.createElement('p');
    p.innerHTML = JSON.stringify(numeros);
    resultado.appendChild(p);
    } else {
        alert('Insira Quantidade Menor que (Valor Maximo - Valor Minimo)')
    }

});
*/

const q4 = document.querySelector('#q4');
q4.innerHTML = '<h1>QUESTÃO 4</h1>'
+ '<label for="qtdade">Quantidade</label>'
+ '<input type="number" id="qtdade"><br>'
+ '<label for="valorMin">Valor Minimo</label>'
+ '<input type="number" id="valorMin"><br>'
+ '<label for="valorMax">Valor Maximo</label>'
+ '<input type="number" id="valorMax"><br>'
+ '<button onClick="getInf()">Calcular</button>'
+ '<div id="respostaQ4"></div>'

function getInf(){
    let qtdade = parseInt(document.querySelector('#qtdade').value);
    let min = parseInt(document.querySelector('#valorMin').value);
    let max = parseInt(document.querySelector('#valorMax').value);
    if (qtdade < max - min ){
    let numeros = criarVetorAleatorio(qtdade, min, max);
  
    let resultado = document.querySelector('#respostaQ4');
    let p = document.createElement('p');
    p.innerHTML = JSON.stringify(numeros);
    resultado.appendChild(p);
    } else {
        alert('Insira Quantidade Menor que (Valor Maximo - Valor Minimo)')
    }
}

function criarVetorAleatorio(qtd, min, max){
    let numeros = {};
    let i=0;
    while( i < qtd ){
        let n = Math.round( (Math.random()*(max-min)) + min );
  
        if( numeros[n] )
            continue; 
        numeros[n]=true;
        i++;
      }
      return Object.keys(numeros);
  }

