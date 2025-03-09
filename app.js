let listaAmigos = []; 
let controleLista = 0; 

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo').value;

    if (inputAmigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        if (listaAmigos.includes(inputAmigo)) {
            alert('Este amigo já está na lista!');
        } else {
            listaAmigos.push(inputAmigo);
            atualizarLista();
            document.getElementById('amigo').value = '';
        }
    }
}

function atualizarLista() {
    let listaNomes = document.getElementById('listaAmigos');
    let resultadoLista = document.getElementById('resultado');
    listaNomes.innerHTML = '';
    resultadoLista.innerHTML = '';

   
    for (let i = 0; i < listaAmigos.length; i++) {
        let amigo = listaAmigos[i];
        let novoNome = document.createElement('li');
        novoNome.textContent = amigo;
        listaNomes.appendChild(novoNome);

    }

}

function sortearAmigo() {

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = '';
    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;

}