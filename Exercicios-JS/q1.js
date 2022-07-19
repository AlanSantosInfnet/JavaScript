/*
const button = document.querySelector('#submitQ1')
button.addEventListener("click", () => {

    let minimo = document.querySelector("#q1 #min").value;
    let maximo = document.querySelector("#q1 #max").value;

    if (minimo.trim().length && maximo.trim().length){
        if (minimo < maximo){
            getValue(minimo, maximo);
        }else { 
            alert ("Insira 1º Valor Menor e 2º Valor Maior!")
        }

    }else {
        alert ("Insira um valor!")
    }

});
*/

const q1 = document.querySelector('#q1');
q1.innerHTML = '<h1>QUESTÃO 1</h1>'
+ '<label for="min">Valor Min</label>'
+ '<input type="number" id="min"> <br>'
+ '<label for="max">Valor Max</label>'
+ '<input type="number" id="max"> <br>'
+ '<button onClick="getValue()">Calcular</button>'
+ '<div id="respostaQ1"></div>'
        

function getValue () {
    let minimo = document.querySelector("#q1 #min").value;
    let maximo = document.querySelector("#q1 #max").value;

    if (minimo =="" && maximo == ""){
        alert ("Insira um valor!")
    }else {
        addCalculo(minimo,maximo);   
    }

}

function addCalculo(minimo,maximo) {
    multiplos2=[]
    multiplos3=[]
    cont=[]
    
        for (minimo++; minimo < maximo; minimo++) {
            cont.push(minimo);
            if (minimo % 2 === 0)
                multiplos2.push(minimo)
            if (minimo % 3 ===0)
                multiplos3.push(minimo)
        }
    
    addVelue (multiplos2, multiplos3, cont)

}

function addVelue (multiplos2, multiplos3, cont) {
    let resultado = document.querySelector('#q1 #respostaQ1');
    let p = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p.innerHTML += (`Total = ${cont.length} / [${cont}]`);
    p1.innerHTML += (`Multiplos de "2" = ${multiplos2.length} / [${multiplos2}]`);
    p2.innerHTML += (`Multiplos de "3" = ${multiplos3.length} / [${multiplos3}]`);
    resultado.appendChild(p)
    resultado.appendChild(p1)
    resultado.appendChild(p2)
}