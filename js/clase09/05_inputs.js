console.log('Eventos en inputs');

const nameInput = document.getElementById('name')
const lastname = document.getElementById('lastname')

function imprimeValor( event ) {
    // console.log(this.value);
    console.log(event.target.value);
}

// nameInput.addEventListener('change', imprimeValor)
// lastname.addEventListener('change', imprimeValor)

nameInput.addEventListener('input', imprimeValor)
lastname.addEventListener('input', imprimeValor)

function prevenirCaracteres( evento ) {
    console.log(evento);
    if ( evento.key == 'ñ' ) {
        evento.preventDefault()
    }
}

nameInput.addEventListener('keydown', prevenirCaracteres)
lastname.addEventListener('keydown', prevenirCaracteres)


