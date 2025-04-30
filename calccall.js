var prompt = require('prompt-sync')();

let msm1 = parseInt(prompt("digite  primeiro numero   "))
let msm2 = prompt("digite sua oparaçao (+,-,*,/) ")
let msm3 = parseInt(prompt("digite o segundo numero"))
 return msm1+msm3
function calcular(){


switch(msm2){
    case "+":
        let soma = msm1 + msm3
        console.log("seu resultado foi : ",soma)
        break
    case "-":
        let soma2 = msm1 - msm3
        console.log("seu resultado foi : ",soma2)
        break
        case "*":
            let soma3 = msm1 * msm3
            console.log("seu resultado foi : ",soma3)  
            break
            case "/":
                let soma4= msm1 / msm3
                if(msm3===0){
                  console.log("indivisavel por zero")  
                }
                else{
                  console.log("seu resultado foi : ",soma4)  
                }
               
            break
        
}

}

calcular(()=>{console.log("seu resultado foi  ")})