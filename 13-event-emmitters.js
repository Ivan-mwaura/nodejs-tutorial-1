const EventEmitter = require('events')

const customEmmitter = new EventEmitter()

customEmmitter.on('response',(name, id)=> {
    console.log(`data recieved for user -> name : ${name} id : ${id}`)
})
customEmmitter.on('response',()=> {
    console.log(`data recieved`)
})

customEmmitter.emit('response','Evans', 4676)