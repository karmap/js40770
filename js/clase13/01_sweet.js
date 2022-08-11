console.log('Sweet Alert');

const boton = document.getElementById('miBoton')

boton.onclick = () => {
    console.log('click');

    Swal.fire({
        icon: 'info',
        title: 'noooo ...',
        text: '¡Algo salió mal!',
        footer: '<a href="http://google.com">Mejor ve a google</a>'
      })
}