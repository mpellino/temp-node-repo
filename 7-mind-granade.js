const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is : ${num1} + ${num2}`)
}

addValues()

//if I export this function as module, because I call the addValue in the module it will be called automatically
// and the function will run just by require it.