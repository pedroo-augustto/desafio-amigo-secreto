// Lista e função criadas para receber os nomes dos amigos 
let amigos = [];
let listaDeNomesSorteados = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    
    if (amigos.includes(nome)) {
        alert('Nome já adicionado!');
        limparCampo();
        return;
    } else if (nome == '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    limparCampo();
    exibirLista();
}

// Função criada para limpar o campo após adicionar um nome
function limparCampo() {
    let campo = document.getElementById('amigo');
    campo.value = '';
}

// Função criada para exibir os nomes conforme forem acidionados
function exibirLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
    }
}

// Função criada para sortear os nomes a partir de 3 nomes adicionados
function sortearAmigo () {
    if (amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos para sortear!');
        return;
    }

    // Cria um alerta quando todos nomes forem sorteados solicita reiniciar a página para reiniciar o app
    if (listaDeNomesSorteados.length === amigos.length) {
        alert('Todos os amigos foram sorteados! Reinicie a página para realizar um novo sorteio!');
        return;
    }

    // Realiza o sorteio do nome do amigo, a partir do índice, e verifica se o mesmo já foi adicionado na lista de nomes já sorteados 
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    while (listaDeNomesSorteados.includes(indiceSorteado)) {
        indiceSorteado = Math.floor(Math.random() * amigos.length);
    }
    
    // Insere o nome do amigo, de acordo com o índice, na lista de amigos já sorteados
    listaDeNomesSorteados.push(indiceSorteado);
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado dos sorteios e desabilita a inserção de novos nomes
    document.getElementById('resultado').innerHTML = `Seu Amigo Secreto Sorteado foi: ${amigoSorteado}`;
    document.getElementById('listaAmigos').innerHTML = '';
    desabilitarEntrada();
    esconderAmigoSorteado();
    return;
}

    // Função criada para esconder o nome do amigo sorteado, para deixar a interação do usuário mais restrita
    function esconderAmigoSorteado () {
    setTimeout(() => {
    alert('Clique em "OK" para esconder o nome do seu amigo secreto!');
    document.getElementById('resultado').innerHTML = '';
    }, 0);
    return;
}

// Função criada para desabilitar a inserção de nomes a partir do primeiro sorteio dos nomes
function desabilitarEntrada() {
    document.querySelector('.button-add').disabled = true;
    document.querySelector('.button-add').style.cursor = 'not-allowed';

    document.querySelector('.input-name').disabled = true;
    document.querySelector('.input-name').style.cursor = 'not-allowed';
}