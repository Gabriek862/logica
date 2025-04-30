var prompt = require('prompt-sync')();
let somat = 0 
function calcmedia (){
    let n1 = parseInt(prompt("digite sua primeira nota "))
    let n2 = parseInt(prompt("digite sua segunda  nota "))
    let n3 = parseInt(prompt("digite sua terceira nota "))
    let soma = (n1+n2+n3)/3
    somat = somat+soma
} 

function verifaprovado(){
    
    if(somat>=6){
      console.log("aprovado com :  ", somat)

    }
    else{
        console.log("reprovado com :  ", somat)
    }

}
calcmedia()
verifaprovado()
