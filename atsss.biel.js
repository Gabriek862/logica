var prompt = require('prompt-sync')();
function mostrarmemsagem(){
    console.log("estudando funçoes em java script!")
}
function fazendocalc(){
    let n = parseInt(prompt("digite  primeiro numero  "))

    let n2 = parseInt(prompt("digite  segundo numero  "))

        
           console.log("sua soma e :  ", n+n2)    
       
            console.log("sua multiplicaçao e :  ", n*n2)
    
        
            console.log("sua divisao e :  ", n/n2)   
        
            console.log("sua potenciaçao e :  ", n**n2)   
          
        
        }
 

mostrarmemsagem()
fazendocalc()