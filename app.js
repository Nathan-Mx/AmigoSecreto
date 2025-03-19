// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim();
}

    if (nombre === ""){
        alert("Por favor, inserte un Nombre Valido.");
        return;
    }

    if(amigos.includes(nombreAmigo)) {
        alert("El nombre ${nombreAmigo}' ya está en la lista");
        return;
    }

    amigos.push(nombreAmigo);

    inputAmigo.arivalue="";

  
    
function actualizarLista(){
    const listaAmigos = document.getElementById('ListaAmigos');

    listaAmigos.innerHTML = "";

    for(let i = 0; 1 <amigos.length; i++){
        cosntli = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);

    }
}

function sortearamigo(){
    if(amigos.length === 0){
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigo[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTLM = 'Amigo sorteado: <strong>${amigoSorteado}</strong>';
}