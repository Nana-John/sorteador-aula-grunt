const form = document.getElementById('sorteio-form');
const numeroMaximoInput = document.getElementById('numero-maximo');
const resultado = document.getElementById('resultado');
const mensagemErro = document.getElementById('mensagem-erro');

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