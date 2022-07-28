console.log('addEventListener con función tradicional');

const miBoton = document.getElementById('miBoton')

function clickHandler() {
    console.log('Hiciste click en el botón');
}

miBoton.addEventListener('click', clickHandler)

// const clickHandler = () => {
//     console.log('Hiciste click en el botón');
// }

miBoton.addEventListener('click', clickHandler)
