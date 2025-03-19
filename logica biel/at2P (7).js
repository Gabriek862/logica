var prompt = require('prompt-sync')();
let edt = prompt("Digite o codigo do produto  ")
switch(edt){
    case "celular":
        console.log("Celular - RS:2000  ")
    break
    
    case "notebook":
        console.log("Notebook - RS:3500  ")
        break

    case "fone":
        console.log("Fone de ouvido - RS:150  ")
        break 
    default:
        console.log("opçao invalida mano")    
}