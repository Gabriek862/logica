
//total do mes
let salariotot = 3000
let salariotot2 = 2500
let salariotot3 = 4000
let salariotot4 = 2000
//valor por hora 
let vph = salariotot/(30*8)
let vph2 = salariotot2/(30*8)
let vph3 = salariotot3/(30*8)
let vph4 = salariotot4/(30*8)
//lista do salario
console.log("salario do funcionario 1 :",salariotot,"valor por hora : RS "+ vph.toFixed(2))
console.log("salario do funcionario 2 :",salariotot2,"valor por hora : RS "+ vph2.toFixed(2))
console.log("salario do funcionario 3 :",salariotot3,"valor por hora : RS "+ vph3.toFixed(2))
console.log("salario do funcionario 4 :",salariotot4,"valor por hora : RS "+ vph4.toFixed(2))
//perguntas
console.log("\nfuncionario 1 ganha mais por hora que o funcioanrio 2?",vph>vph2)
console.log("funcionario 3 tem um salario maior que o funcinario 4?",vph3>vph4)
console.log("funcionario 2 e funcionario 4 ganham o mesmo por hora?",vph2==vph4)
console.log("funcionario 1 tem um salario diferente do funcionario 3?",vph!=vph3)
