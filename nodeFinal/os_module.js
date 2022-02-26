const os = require('os')

// info abt current user
const user = os.userInfo()
console.log(user)

// up time of system
const upTime = os.uptime()
console.log(`The system up time is ${upTime} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)