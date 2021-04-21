function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, '+ nombre)
        miCallback(nombre)
    }, 1000)
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla bla...')
        callbackHablar()
    },1000)
}
function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios', nombre)
        otroCallback()
    }, 1000)
}

function conversacion(nombre, veces, callback) {
    if(veces > 0){
        hablar(() => {
            conversacion(nombre, --veces, callback)
        })
    } else {
        adios(nombre, callback)
    }
}

console.log('Iniciando proceso...')
hola('Frida', (nombre) => {
    conversacion(nombre, 3, () => {
        console.log('Proceso terminado')
    })
})
/* hola('Frida', (nombre) => {
    hablar(() => {
        hablar(() => {
            hablar(() => {
                adios(nombre, () => {
                    console.log('Terminando proceso..')
                })
            })
        })
    })
})

 */