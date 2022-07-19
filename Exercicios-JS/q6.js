const q6 = document.querySelector('#q6');
q6.innerHTML = '<h1>QUESTÃO 6</h1>'
+ '<div id="nao_logado" >'
+ '<h2>Login</h2>'
+ '<label for="usuario">ID</label>'
+ '<input id="usuario" type="text"> <br>'
+ '<label for="senha">Senha</label>'
+ '<input id="senha" type="password"> <br>'
+ '<button id="logar">Login</button>'

+ '<h2>Cadastrar Usuario</h2>'
+ '<label for="cadastroUsuario">Cadastrar ID</label>'
+ '<input id="cadastroUsuario" type="text"> <br>'
+ '<label for="cadastroSenha">Cadastrar Senha</label>'
+ '<input id="cadastroSenha" type="password"> <br>'
+ '<button id="criar" >Criar</button>'
+ '<div id="msg"></div>'

+ '<div id="logado">' 
+ '<div>Logado !!!</div>'
+ '<button id="deslogar">Deslogar</button>'
+ '</div>'

const logar = document.querySelector('#logar');
logar.addEventListener("click", () => {
let usuario = document.querySelector('#usuario').value;
let senha = document.querySelector('#senha').value;
let naoLogado = document.querySelector('#nao_logado');
let logado = document.querySelector('#logado');

addLogin(usuario, senha, naoLogado, logado);

});

function addLogin (usuario, senha, naoLogado, logado) {

    let users=[];
    if (window.localStorage.getItem("users")) {
        users = JSON.parse(window.localStorage.getItem("users"));
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].cadastroUsuario == usuario && users[i].cadastroSenha == senha) {
          window.localStorage.setItem(
            "login",
            document.querySelector("#usuario").value
          );
        
        naoLogado.style.visibility = "hidden";
        logado.style.visibility = "visible";
        break;
          
          
        } else {
            alert('Usuario ou Senha Incorreta !!!')
        }
    }
}
    
const cadastro = document.querySelector('#criar');
cadastro.addEventListener('click', ( ) => {
let cadastroUsuario = document.querySelector('#cadastroUsuario').value;
let cadastroSenha = document.querySelector('#cadastroSenha').value;

addUsuario(cadastroUsuario, cadastroSenha);

});

function addUsuario (cadastroUsuario, cadastroSenha) {
    let users = [];
    if (window.localStorage.getItem("users")) {
        users = JSON.parse(window.localStorage.getItem("users"));
    }
    users.push({cadastroUsuario: cadastroUsuario, cadastroSenha: cadastroSenha});
    window.localStorage.setItem("users", JSON.stringify(users));

    addMsgCadastrado();
}

function addMsgCadastrado () {
    let msg = document.querySelector('#msg');
    let p = document.createElement('p');
    p.innerHTML = "Usuario Cadastrado!!!";
    msg.appendChild(p);
}

const deslogar = document.querySelector('#deslogar');
deslogar.addEventListener("click", () => {
    let naoLogado = document.querySelector('#nao_logado');
    let logado = document.querySelector('#logado');

    naoLogado.style.visibility = "visible";
    logado.style.visibility = "hidden";

})

