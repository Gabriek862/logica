var prompt = require('prompt-sync')();

let ptr = parseInt(prompt("digite     "))


for(let i= 1 ; i <= ptr ; i++){
     if(ptr % i ==0){
        console.log("divises :", i)
     }
        
}
