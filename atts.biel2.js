var prompt = require('prompt-sync')();

let v1 = prompt("bem vindo a Fatorial 2300")
let nx= parseInt(prompt("digite o numero que sera fatoriado   "))
let n = 1

for(let i = 1 ;i<=nx;i++){
    n = n*i
    
    
}
console.log("seu numero fat",n  )