const { exec, spawn } = require('child_process')

/* exec('node consola.js', (err, stdout, sterr) => {
    if(err) {
        console.error(err)
        return false
    }

    console.log(stdout)
}) */

let proceso = spawn('ls', ['-la'])

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', (dato) => {
    console.log(proceso.killed)
    console.log(dato.toString())
})

proceso.on('exit', () => {
    console.log('el proceso terminó')
    console.log(proceso.killed)
})