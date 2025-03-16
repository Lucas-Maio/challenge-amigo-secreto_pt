//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let campo = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos')
let resultado = document.getElementById('resultado')
let amigos = []

function adicionarAmigo() {
    if(campo.value === ''){
        alert('Por favor, insira um nome')
    }else {
        amigos.push(campo.value)
        console.log(amigos)
        campo.value = ''
        atualizarLista();
    }
    
}

function atualizarLista() {
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }

}

function sortearAmigo() {
    if(amigos.length === 0 ){
        alert('A lista de amigos está vazia.')
        return
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado]

    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</Strong>`;
}

