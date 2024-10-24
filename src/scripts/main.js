const form = document.getElementById('sorteio-form');
const resultado = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        const numeroMaximo = parseInt(document.getElementById('numero-maximo').value);
        const numeroSorteado = Math.floor(Math.random() * numeroMaximo) + 1; // Sorteia um número
        resultado.textContent = `Número sorteado: ${numeroSorteado}`; // Exibe o resultado
});