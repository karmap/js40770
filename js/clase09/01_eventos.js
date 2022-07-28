console.log('Eventos');

const root = document.getElementById('root')

const boton = document.createElement('button')
boton.innerText = 'Da click aquí'

root.prepend(boton)

boton.addEventListener('click', () => {
    console.log('hiciste click');
})

