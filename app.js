// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nome = input.value.trim();

    if (!nome) {
        alert('Digite um nome válido.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Esse nome já foi adicionado.');
        return;
    }

    amigos.push(nome);

    // Adiciona o nome à lista visível no HTML
    const li = document.createElement('li');
    li.textContent = nome;
    li.setAttribute('role', 'listitem');
    listaAmigos.appendChild(li);

    input.value = ''; // Limpa o campo de entrada
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio.');
        return;
    }

    let sorteados = [...amigos];

    // Embaralha os amigos sorteados
    for (let i = sorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]];
    }

    // Garante que ninguém se auto-sorteie
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === sorteados[i]) {
            alert('Houve um empate. Sorteando novamente...');
            return sortearAmigo(); // Recomeça o sorteio
        }
    }

    // Exibe o resultado no HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa resultados anteriores

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} → ${sorteados[index]}`;
        li.setAttribute('role', 'listitem');
        resultado.appendChild(li);
    });
}
