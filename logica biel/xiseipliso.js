var prompt = require('prompt-sync')();
let x = parseInt(prompt("digite seu valor X"))
let y = parseInt(prompt("digite seu valor Y"))


if(x>0 && y<0){
   console.log("seu ponto e : Q4") 
  
}

else if (x<0 && y>0){
console.log("seu ponto e Q2")

}


else if (x<0 && y<0){
 console.log("seu ponto e Q3") 
 
}
else if(x>0 && y>0){
    console.log("seu ponto e Q1")

}
else if(y==0 && x==0){
    console.log()
}

else{
    console.log("invalido")
}


