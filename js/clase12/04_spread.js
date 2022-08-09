console.log('Spread operator');

const calificaciones = [9, 9, 8, 10, 7, 6]

console.log(calificaciones);
console.log(...calificaciones);

const maximaCalificacion = Math.max( ...calificaciones )
console.log('Max: ' + maximaCalificacion);

const minimaCalificacion = Math.min( ...calificaciones )
console.log('Max: ' + minimaCalificacion);


// Mate y fisica son la 3a y 4a
const [ , , mate, fisica] = calificaciones
console.log(`${mate} - ${fisica}`);


function convertToH3(...titles) {
    return titles.map( title => `<h3>${title}</h3>` )
}

const grades = convertToH3('Física', 'Química', 'Mate', 'Español')
console.log( grades );

grades.forEach( grade => {
    document.write(grade)
})
