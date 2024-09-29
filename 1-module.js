// every file is module
// alwaz share the minumum

// local
const secret = "SECRET"
// share
const john = 'John'
const marco = 'Marco'

// console.log(module) //exports: {} nothing is dumped here yet

module.exports = {john,marco} //here I export

// console.log(module) // exports: { john: 'John', marco: 'Marco' } secret is not shared