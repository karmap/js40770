console.log('HOF return');

function saludar( nombre ) {
    return () => { console.log(`Hola ${nombre}`); }
}

const saludoMaria = saludar('María')
const saludoJuan = saludar('Juan')

saludoMaria()

saludoJuan()