const prompt =require("prompt-sync")();


//challenge 3

let nombre2 =prompt(" taper un nombre :");
let nmb1=0
console.log ("N =",nombre2)
for (let nmb =1 ; nmb <=nombre2 ; nmb++){
     nmb1 += nmb
}
console.log ("somme = ",nmb1)
