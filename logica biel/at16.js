let usuario= "visitante"
let senha = 12345 
let msm = "acesso negado"
let msm2 = "senha incorreta"
let msm3 = "acesso permitido"
    
let resut = (usuario == "admin" || usuario == "moderador")&& senha == 12345  && msm3 || usuario == "visitante" && msm

 console.log(resut)
 