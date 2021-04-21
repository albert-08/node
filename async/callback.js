function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, '+ nombre)
        miCallback(nombre)
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios', nombre)
        otroCallback()
    }, 1000)
}

console.log('Iniciando proceso...')
hola('Frida', (nombre) => {
    adios(nombre, () => {
        console.log('Terminando proceso..')
    })
})

