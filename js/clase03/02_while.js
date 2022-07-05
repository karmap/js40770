console.log('Ejemplos while');

// let contador = 11

// while ( contador <= 10 ) {
//     console.log(contador);
//     contador++
// }

// do {
//     console.log(contador);
//     contador++
// } while ( contador <= 10 );

let entrada = ''

do {
    entrada = prompt('Dame un comando')

    if ( entrada == 'exit') {
        // continue
        break
    }

    switch ( entrada ) {
        case 'ls':
            alert('ls: lista los archivos y directorios')
            break;
        case 'pwd':
            alert('pwd: nos dice la ruta actual')
            break;
        case 'cd':
            alert('cd: cambia directorio')
            break;
        case 'mkdir':
            alert('mkdir: crear directorio')
            break;
        case 'touch':
            alert('touch: crear archivo vacío')
            break;
        default:
            alert('comando no válido!')
            break;
    }
} while ( entrada != 'exit' );