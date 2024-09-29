// working on the filesys in Asyncronous Approach
const { readFile, writeFile} = require('fs')
// we need to use callback function that will run at specific
console.log('start');
readFile('./content/first.txt', 'utf8',(error, result) => {
        if (error){
            console.log(error)
            return
        }
        const first = result;
    readFile('./content/second.txt', 'utf8', (error, result) => {
        if (error){
            console.log(error)
            return
            }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `here is the result af async callback hell: ${first}, ${second}`,
            (error,result) => {
            if(error) {
                console.log(error)
                return
            }
            console.log('done with the task')
        })
    });
})
console.log('starting next task')

//Due to the asynchronous nature of these operations, the final console.log('starting next task') 
// statement executes before the file operations complete. 
// This behavior illustrates how Node.js's non-blocking I/O allows 
//the program to continue executing subsequent code 
//(like logging 'starting next task') without waiting for 
//the previous asynchronous tasks (reading and writing files) to 
//finish.

