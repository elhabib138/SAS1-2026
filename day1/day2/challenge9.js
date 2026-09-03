const prompt =require("prompt-sync")();

let nombre=prompt("taper un nombre :");
let nombre1= prompt("taper un nombre :");
let nombre2=1
let résultat=1
while(nombre2<=nombre1){
    nombre2++
    résultat=résultat*nombre
}
console.log("résultat : ",résultat)