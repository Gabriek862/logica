var prompt = require('prompt-sync')();
let valor= parseInt(prompt("digite o valor  "))
let conv = parseInt(prompt("digite onde converter: USD1, EUR2 ou GBP3  "))

let usd = valor/5.74
let eur = valor/5.50
let gbp = valor/6.30

switch(conv){


    case 1:
        console.log((esd).toFixed(2))
    break;

    case 2:
        console.log((eur/5.50).toFixed(2))
    
    break;
    case 3:
        console.log((gbp/6.30).toFixed(2))
        
    break;
        
    default:
        console.log("insira um valor calculavel")

}