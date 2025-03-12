let idade = 71
let msm = "voto opcional"
let msm2 = "voto obrigatorio"
let msm3 = "nao pode votar"
let votoop = (idade>=70||idade==17 || idade== 16) && msm || (idade>=18 && idade<70)&& msm2 || (idade<16)&& msm3


console.log(votoop)