const form = document.getElementById('form-comparacao');

let formEValido = false;

function validaNumMaior(numeroA, numeroB) {
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let numeroA = parseFloat(document.getElementById('num1').value);
    let numeroB = parseFloat(document.getElementById('num2').value);

    const mensagemSucesso = `Tudo correto! O número B é maior que o número A!`;
    const containermensagemSucesso = document.querySelector('.success-message');

    formEValido = validaNumMaior(numeroA, numeroB);

    if (formEValido) {
        document.querySelector('.error-message').style.display = 'none';
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        
        numeroA.value = '';
        numeroB.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermensagemSucesso.style.display = 'none';
    }
});
