var prompt = require('prompt-sync')();
console.clear()

let dev = (prompt("digite  o codigo  "))



switch(dev){
    case "1":
       let cq = 4
       let quant = parseInt(prompt("digite a quantidade   "))
       let resu = (cq*quant).toFixed(2)
       console.log("==Cachoro quente== \nvalor total :  " ,resu,"\nid do pedido :  ",dev, "\nquantidade :  ",quant)
        break
    case "2":
        let xs = 4.50
        let quant2 = parseInt(prompt("digite a quantidade   "))
        let resu2 = (xs*quant2).toFixed(2)
        console.log("==X Salada == \nvalor total :  ",resu2,"\nid do pedido :  ",dev, "\nquantidade :  ",quant2)
        break
    case "3":
        let xb = 5
        let quant3 = parseInt(prompt("digite a quantidade   "))
        let resu3 = (xb*quant3).toFixed(2)
        console.log("==X- Bacon == \nvalor total :  ",resu3,"\nid do pedido :  ",dev, "\nquantidade :  ",quant3)
        break
    case "4":
        let ts = 2
        let quant4 = parseInt(prompt("digite a quantidade   "))
        let resu4 = (ts*quant4).toFixed(2)
        console.log("==Torrada == \nvalor total :  ",resu4,"\nid do pedido :  ",dev, "\nquantidade :  ",quant4)   
        break
    case "5":
        let rg = 1.50
        let quant5 = parseInt(prompt("digite a quantidade   "))
        let resu5 = (rg*quant5).toFixed(2)
        console.log("==Refrigerante== \nvalor total: ",resu5,"\nid do pedido :  ",dev, "\nquantidade :  ",quant5)
        break 

        default:
        console.log("invalido")
}
