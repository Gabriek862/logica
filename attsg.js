var prompt = require('prompt-sync')();

function pizza(pedido,entrega,resu){
    console.log("pedido feito ")
    setTimeout(()=>{
        pedido() 
    },3000)
    setTimeout(()=>{
        entrega()
    },5000)
    setTimeout(()=>{
        resu()
    },1000)
    
}
pizza(()=>{console.log("cliente foi avisado")}),()=>{console.log("pizza a caminho ")},()=>{console.log("cliente foi avisado")}


    
