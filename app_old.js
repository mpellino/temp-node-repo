const amount = 9
if (amount < 10) {
    console.log ('great')
} else {
    console.log ('not so great')
}

// this is a global example: the example is __dirname
console.log (`my final app on ${__dirname}`)
console.log(`the program is exectuted in ${process.version}`)
console.log(`the program is exectuted platform: ${process.platform}`)


// invoke a module


const sayHi = (name) => {
    console.log(`Hallo there ${name}`)
}

sayHi('Marco')

