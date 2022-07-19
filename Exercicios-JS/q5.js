/*
const button5 = document.querySelector("#q5 #submitQ5");
button5.addEventListener('click', () => {

    let lado1 = document.querySelector("#q5 #ladoA").value;
    let lado2 = document.querySelector("#q5 #ladoB").value;
    let lado3 = document.querySelector("#q5 #ladoC").value;

   addVerif(lado1, lado2, lado3);  
});
*/

const q5 = document.querySelector('#q5');
q5.innerHTML = '<h1>QUESTÃO 5</h1>'
+ '<label for="ladoA">Lado A</label>'
+ '<input type="number" id="ladoA"><br>'
+ '<label for="ladoB">Lado B</label>'
+ '<input type="number" id="ladoB"><br>'
+ '<label for="ladoC">Lado C</label>'
+ '<input type="number" id="ladoC"><br>'
+ '<button onClick="calculoTriangulo()">Calcular</button>'
+ '<div id="respostaQ5"></div>'

function calculoTriangulo(){
  let lado1 = document.querySelector("#q5 #ladoA").value;
  let lado2 = document.querySelector("#q5 #ladoB").value;
  let lado3 = document.querySelector("#q5 #ladoC").value;

  addVerif(lado1, lado2, lado3); 
}


function addVerif(lado1, lado2, lado3) {
    let resp = "";
    if (lado1 == lado2 && lado2 == lado3) {
      resp = "Equilatero";
    } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        resp = "Escaleno";
      } else {
        resp = "Isosceles";
      } 
    addPrint(resp);
}

function addPrint(resp){
  let resultado = document.querySelector('#q5 #respostaQ5');
  let p = document.createElement('p');
  p.innerHTML = (`Resposta Triângo: ${resp}`);
  resultado.appendChild(p);
}