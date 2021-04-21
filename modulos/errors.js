function otraFuncion() {
    serompe()
}

function serompe() {
    return 3 + z
}

function seRompeAsync(cb) {
    setTimeout(() => {
        try {
            return 3 + z
        } catch (error) {
            console.error('Error en mi funcion asincrona')
            cb(error)
        }
        
    })
}
try {
    seRompeAsync((error) => {
        console.log(error.message)
    })
} catch (error) {
    console.error('Vaya, algo se ha roto...')
    console.error(error)
    console.log('Pero no pasa nada, lo hemos capturado')
}

console.log('Esto de aqui está al final')