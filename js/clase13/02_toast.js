console.log('Toastify');

const boton = document.getElementById('miBoton')

boton.onclick = () => {
    console.log('click');

    Toastify({
        text: "Mi notificación",
        duration: 1000,
        position: 'left',
        gravity: 'bottom',  
    }).showToast();
}