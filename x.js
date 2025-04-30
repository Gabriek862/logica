var prompt = require('prompt-sync')();
function somar(a,b){
    return a+b
}
let subtrair= (a,b)=>{
    return a-b
}
let multi = (a,b)=>{
    return a*b
}
let dividir = (a,b)=>{
    if(b===0){
        console.log("indivisivel por 0 ")
        
    }
    else{
        return a/b
    }
}
function calcular(a,b , op){
    return op (a,b)
}
let n = parseInt(prompt("digite primeiro numero "))
let op  = prompt("digite sua operaçao")
let n2 = parseInt(prompt("digite primeiro numero "))
if(op==="+"){
    console.log(calcular(n1,n2,somar))
}
else if(op==="-"){
    console.log(calcular(n1,n2,subtrair))
}
else if(op==="*"){
    console.log(calcular(n1,n2,multi))
}
else if(op==="/"){
    console.log(calcular(n1,n2,dividir))
}
else{
    console.log("operaçao invalida")
}