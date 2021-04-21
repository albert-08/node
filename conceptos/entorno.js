//NOMBRE=Alberto WEB=alberto.com node entorno.js
let nombre = process.env.NOMBRE || 'Sin nombre'
let web = process.env.WEB || 'NO TENGO WEB'

console.log('Hola '+nombre)
console.log('Mi web es '+ web)

