let media1 = 
let media2 = 
let media3 = 
let totalmedia =  (media1+media2+media3)/3
let msm = "reprovado"
let msm2 = "recuperaçao"
let msm3 = "aprovado"
let diret = (totalmedia<5) && msm || (totalmedia>=5 && totalmedia<7)&& msm2 || (totalmedia>=7) && msm3
console.log(diret)
console.log(totalmedia)