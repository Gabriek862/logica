let cf = true ; 
let gasto = 100;
let desc = 0.1;
let ttdesc = gasto * desc;
let total = gasto- ttdesc; 
let conferindo = (cf || gasto >100) && total || gasto; 
console.log(conferindo)
