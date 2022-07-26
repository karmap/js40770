console.log('DOM 2');

let producto = 'bocinas'

let nuevoElemento = document.createElement('li')
nuevoElemento.innerText = producto

let root = document.querySelector('#root')
console.log(root);

root.append( nuevoElemento )

// Eliminar 'laptop'
let lista = document.querySelectorAll('li')
console.log(lista);

lista[1].remove()