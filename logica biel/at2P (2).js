var prompt = require('prompt-sync')();
let media1= parseInt(prompt("digite sua primeira nota "))
let media2 = parseInt(prompt("digite sua segunda nota "))
let media3 = parseInt(prompt("digite sua terceira nota "))
let totalmedia =  (media1+media2+media3)/3
let msm = "reprovado"
let msm2 = "recuperaçao"
let msm3 = "aprovado"
let diret = (totalmedia<5) && msm || (totalmedia>=5 && totalmedia<7)&& msm2 || (totalmedia>=7) && msm3
console.log(diret)
console.log(totalmedia)
