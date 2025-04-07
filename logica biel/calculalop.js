var prompt = require('prompt-sync')();
let pt = prompt("Bem vindo ao calculadora ")
console.clear()
while(pt!="sair"){
    
    let cal= parseInt(prompt("digite seu numero "))
    let pt2 = prompt("digite sua operaçao ")
    let cal2= parseInt(prompt("digite seu numero "))
    if(pt2=="+"){
            console.log("seu resultado foi :  ",cal+cal2)
    }
    else if(pt2=="-"){
            console.log("seu resultado foi :  ",cal-cal2)
    }
     else if(pt2=="*"){
             console.log("seu resultado foi :  ",cal*cal2)   
     }  
     else if(pt2=="/"){
        if(cal2 != 0){
            console.log("seu resultado foi :  ",cal/cal2)
        }
        else{
          console.log("nao divisivel por zero ")
        }
             
     }
     else if(pt2=="%"){
             console.log("seu resultado foi :  ",cal%cal2)
     }
    else if(pt2=="**"){
             console.log("seu resultado foi :  ",cal**cal2)
    }
     else{
        console.log("OPERAÇAO invalida")
     }
    pt = prompt("deseja sair?\n 1-sair \n2-continuar : qualquer tecla    ")
     console.clear()

    }
console.log("voce saiu")