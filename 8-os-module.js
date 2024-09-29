// OS module.

// general setup for the module is similar
// firt variable then require
const os = require('os') //os is internal module so no ./

// info about current user
const user = os.userInfo()
console.log(user)

// system uptime in seconds
console.log(`system uptime is ${os.uptime()/60/60/24} days`)

// info on operating system 
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)

// 
