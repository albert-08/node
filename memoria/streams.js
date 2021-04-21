const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = ''

let readebleStream = fs.createReadStream(__dirname + '/input.txt')
readebleStream.setEncoding('UTF8')

/* readebleStream.on('data', chunk => {
    data += chunk
})

readebleStream.on('end', () => {
    console.log(data)
}) */

/* process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal') */

const Transform = stream.Transform

function Mayus() {
    Transform.call(this)
}
util.inherits(Mayus, Transform)

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}

let mayus = new Mayus()

readebleStream
    .pipe(mayus)
    .pipe(process.stdout)