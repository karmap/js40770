console.log('Desestructuración en parámetros');

const boton = document.getElementById('miBoton')

function clickHandler( { target } ) {
    console.log('Click!!!');
    console.log( target );
}

boton.addEventListener('click', clickHandler)