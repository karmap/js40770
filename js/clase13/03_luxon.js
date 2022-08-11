console.log('Luxon');

const DT = luxon.DateTime

const ahora = DT.now()
const despues = DT.fromObject(
    { day: 31, month: 12 }
)

const format = dt => dt.setLocale('es').toLocaleString(DT.DATE_FULL)

// console.log(ahora.toString());

console.log( format(ahora) );
console.log( format(despues) );

const interval = luxon.Interval.fromDateTimes(ahora, despues)

console.log( interval.length('days') );
console.log( interval.length('hours') );
console.log( interval.length('seconds').toLocaleString() );