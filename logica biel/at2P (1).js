var prompt = require('prompt-sync')();
let horas =  parseInt(prompt("digite as horas"))

if(horas>=5 && horas<=11){
    console.log("am ");
}
else if (horas>=12 && horas<=23){
    console.log("pm");
}
else{
    console.log("madrugada");
}
console.log(horas)