const form = document.getElementById('sorteio-form');
const numeroMaximoInput = document.getElementById('numero-maximo');
const resultado = document.getElementById('resultado');
const mensagemErro = document.getElementById('mensagem-erro');

<<<<<<< HEAD
function sortearNumero(numeroMaximo) {
if (numeroMaximo <= 0) {
    return null; // Ou retornar um valor indicando erro
}
  return Math.floor(Math.random() * numeroMaximo) + 1;
}

function exibirResultado(numeroSorteado) {
if (numeroSorteado) {
    resultado.textContent = `Número sorteado: ${numeroSorteado}`;
    mensagemErro.textContent = '';
} else {
    mensagemErro.textContent = 'Por favor, insira um número máximo válido.';
}
}

form.addEventListener('submit', (event) => {
event.preventDefault();
const numeroMaximo = parseInt(numeroMaximoInput.value);
const numeroSorteado = sortearNumero(numeroMaximo);
exibirResultado(numeroSorteado);
});
=======
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        const numeroMaximo = parseInt(document.getElementById('numero-maximo').value);
        const numeroSorteado = Math.floor(Math.random() * numeroMaximo) + 1; // Sorteia um número
        resultado.textContent = `Número sorteado: ${numeroSorteado}`; // Exibe o resultado
});
>>>>>>> 74a94d5eae5bfb69fdafba310645bb9a91880388
