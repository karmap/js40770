console.log('Detalles del evento');

const miBoton = document.getElementById('miBoton')
const boton2 = document.getElementById('boton2')

function clickHandler( event ) {
    console.log('Hiciste click en el botón');
    console.log( event.target );
}

miBoton.addEventListener('click', clickHandler)
boton2.addEventListener('click', clickHandler)