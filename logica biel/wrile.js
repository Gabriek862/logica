var prompt = require('prompt-sync')();
let x = parseInt(prompt("digte valor  "))
let soma = 0;
while( x !=0){
    soma = soma + x
    x = parseInt(prompt("digite valor  "))

}
console.log(soma)