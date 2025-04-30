var prompt = require('prompt-sync')();
let nun = parseInt(prompt("digite o numero para cubico  "))
let fx = 1
let fx2 = 1 
let fx3 = 1
for(let i =1;i<=nun;i++){
    let soma = nun**3
    let soma2 = nun**2
    fx = fx*i
    fx2 = fx2*i*i
    fx3 = fx3*i*i*i
    
    console.log(i,soma2 ,soma, fx ,fx2,fx3)
    
}