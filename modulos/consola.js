var tabla = [
    {
        a: 1,
        b: 'A'
    },
    {
        a: 2,
        b: 'F'
    }
]

console.table(tabla)
console.log('Algo')
console.info('Algo')
console.error('Algo')
console.warn('Algo')

console.group('Conversación')
console.log('Hola')
console.group('bla')
console.log('Blablabla')
console.groupEnd('bla')
console.log('Adios')
console.groupEnd('Conversación')

console.log('otra cosa de otra funcion')

console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')