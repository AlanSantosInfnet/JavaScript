/*const relatorio = document.querySelector('#relatorio');
relatorio.addEventListener('click', () =>{

    addRelatorio()

})
*/

const q3 = document.querySelector('#q3');
q3.innerHTML = "<h1>QUESTÃO 03</h1>"
+ "<input id='botaoRel' type='button' value='Criar Relatoio' onClick='addRelatorio()'>"
+"<div id='printRelatorio' ></div>"

function addRelatorio(){
	class Aluno {
		constructor(nr, _nota){
			this.nr = nr;
			this._nota = _nota;
		}

		get nota(){
			return this._nota;
		}
	}

	let alunos = [];
	for(let i = 1; i <= 20; i++){
		let al = new Aluno(i,Math.floor(Math.random()*100));
		alunos.push(al);
	}

	function situacao(nota) {
		return nota >= 60 ?'APROVADO' : 'REPROVADO'
	}

	let print = document.querySelector("#printRelatorio");

	print.innerHTML = ('Notas dos alunos<br>')
	let aprovados = 0;
	for(let i = 0; i< alunos.length; i++) {
		print.innerHTML = print.innerHTML + (`Aluno Nº ${alunos[i].nr} - Nota ${alunos[i].nota} ${situacao(alunos[i].nota)}` + "<br>")
		if(situacao(alunos[i].nota) =='APROVADO'){
			aprovados++;
		}
	}

    print.innerHTML += (`APROVADO ${Math.floor((aprovados/alunos.length)*100)}% | REPROVADOS ${Math.floor(((alunos.length-aprovados)/alunos.length)*100)}%` + "<br>")
	
}



