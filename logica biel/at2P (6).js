var prompt = require('prompt-sync')();
let cod = parseInt(prompt("Digite o codigo do produto  "))
switch(cod){
    case 1:
        console.log("seu produto e hamburquer  RS:15.00  ")
    break
    
    case 2:
        console.log("seu produto e pizza  RS:25.00  ")
        break

    case 3:
        console.log("seu produto e  suco  RS:8.00  ")
        break
    case 4:
        console.log("seu produto e refrigerante  RS:6.00  ")  
        break  

    default:
        console.log("opçao invalida!")    
}