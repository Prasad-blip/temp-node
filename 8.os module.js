const os =require('os')

// to get user info

const user=os.uptime()
console.log(user);

// to get hostname

console.log(`the system host is ${os.hostname()}`)

const currentOS={
name:os.type(),
hostname:os.hostname(),
totalmem:os.totalmem(),
freemem:os.freemem()
}