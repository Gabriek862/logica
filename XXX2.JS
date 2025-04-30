var prompt = require('prompt-sync')(); 
let x =[] 
let sair = prompt("seja bem vindo   ")
while(sair!=="sair"){
     let cliente = prompt("digite  o que deseja   \n1-add(adicionar) \n2-ru(remover ultimo da fila) \n3-rp(remover primeiro da fila) \n4-re(remover em especifico)  ")

     switch(cliente){
        case "add":{
             x.push(prompt("digite o nome do cliente    "))
            console.log(x.join("----"))
           break
        }
           case "ru":{
           x.pop()
           console.log(x.join("----"))
           break
        }
           case "rp":{
           x.shift()
           console.log(x.join("----"))
           break
           }
           case "re":{
            let c = prompt("digite numero do cliente")
            x.splice(c,1)
            console.log(x.join("----"))
            break
           }
            
        
           default:{
            console.log(" operaçao invalida")
        

          }
            

     }
      sair = prompt("deseja sair?   ")

     }

   
    
