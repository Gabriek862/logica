var prompt = require('prompt-sync')();

do{
    let ks = parseFloat(prompt("digite  a temperatura :  "))
    let soma = (9*ks)/5
    let soma2 =  soma+32
    console.log("equivalente em fahrenheit :",(soma2.toFixed(1)))
    kts = prompt("deseja sair ? (s/n)")
   
   }while(kts != "s")
   
console.log("tu saiu do programa")
