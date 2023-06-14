const { log } = require('console')
const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds

console.log(`The systems uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freememory:os.freemem()
}

console.log(currentOs)