var prompt = require('prompt-sync')();
function mostrarmsm(resposta){
    console.log("voce esta estudando jva scripot?");
    setTimeout(() => {
        resposta()
    },5000)
    
}
mostrarmsm(()=>{console.log("sim estou esrtudando java")})