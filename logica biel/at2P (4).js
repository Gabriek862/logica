var prompt = require('prompt-sync')();
let vad = parseInt(prompt("digite sua nota"))
switch(vad){
    case (vad>=10 && vad<=8):
    console.log("execelente")
    break
    
    case (vad>=7 && vad<=5):
        console.log("bom")
    break
    case (vad<=4 && vad>=2):
        console.log("media")
        break
    case (vad>=2 && vad <=0):
        console.log("ruim lixo")
        break 
        default:
            console.log("vai estudar irmao")
            break
}
