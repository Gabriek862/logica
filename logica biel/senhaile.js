var prompt = require('prompt-sync')();
let soc = parseInt(prompt("digite o codigo do produto  "))
let alcool = 0
let gasolina = 0 
let diesel = 0 

while(soc!=4){
    if(soc==1){
        alcool++
    }
    else if(soc==2){
        gasolina++
    }
    else if(soc==3){
        diesel++
    }
    soc = parseInt(prompt("digite o numero "))
    }
console.log("muito obeigado","\n alcool",alcool,"\ngasolina",gasolina,"\ndiesel",diesel)