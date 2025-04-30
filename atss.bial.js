var prompt = require('prompt-sync')();
let v1 = prompt("bem vindo a calculadora")
let n = parseInt(prompt("digite o numero de tentativas"))


for(let i = 1 ;i<=n;i++){
    let v2 = parseInt(prompt("digite numero 1 "))
    let v22 = parseInt(prompt("digite numero 1 "))
    let resu = v2/v22

    if(v22==0)
    console.log("divisao imposivel")
    else console.log("resultado : ",resu)

    
}
console.log("voce saiu da calc")