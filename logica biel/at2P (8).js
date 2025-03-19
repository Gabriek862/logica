var prompt = require('prompt-sync')();
let dev = parseInt(prompt("digite seu numero  "))
let resu = prompt("digite sua operacao  ")
let dev2 = parseInt(prompt("digite seu  segundo numero  "))

switch(resu){
    case "+":
    console.log(dev+dev2)
        break
    case "-":
        console.log(dev-dev2)
        break
    case "*":
        console.log(dev*dev2)
        break
    case "/":
        console.log(dev/dev2)   
        break
    
    default:
        console.log("invalido")
}
