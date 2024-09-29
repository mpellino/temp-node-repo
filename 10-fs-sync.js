// working on the filesys in Syncronous Approach

const { readFileSync, writeFileSync}  = require('fs'); // This syntax extracts only the readFileSync method from the fs module for use.

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(`running read file: ${first},${second}`)

writeFileSync(
    './content/result-sync.txt', 
    ` here is the result: ${first}, ${second}`
    // {flag: 'a'} to append
)

console.log('done with first task')
console.log('start with second task')