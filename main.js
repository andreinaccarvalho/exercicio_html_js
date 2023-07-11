const form = document.getElementById('form-comparacao');
const numeroA = parseFloat(document.getElementById('num1').value);
const numeroB = parseFloat(document.getElementById('num2').value);
let formEValido = false;

function validaNumMaior(numeroA, numeroB) {
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Tudo correto! O número B <b>${numeroB.value}</b> é maior que o número A <b>${numeroA.value}</b>!`;
    const mensagemErro = `Erro! Número B <b>${numeroB.value}</b> é menor que o número A <b>${numeroA.value}</b>!`;

    formEValido = validaNumMaior(numeroA, numeroB)
    if (numeroA == numeroB) {
        alert("O número A é igual ao número B");
    } else if (numeroA > numeroB) {
        alert("O número A é maior que o número B");
    } else {
        alert("O número B é maior que o número A");
    }
});
