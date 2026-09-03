let prompt=require("prompt-sync")();

let nombre1 =Number(prompt(console.log ("taper un nombre : ")));
let nombre2 =Number(prompt(console.log ("taper un nombre : ")));
let opération = prompt("taper l'opération : ");
switch(opération){
    case "*":
        console.log(nombre1 +" X "+nombre2+" = "+(nombre1*nombre2))
        break
    case"+":
    console.log(nombre1 +" + "+nombre2+" = "+(nombre1 + nombre2))
        break
    case "-":
        console.log(nombre1 +" - "+nombre2+" = "+(nombre1 - nombre2))
        break
    case"/":
        console.log(nombre1 +" / "+nombre2+" = "+(nombre1 / nombre2))
        break
    case "%":
        console.log(nombre1 +" % "+nombre2+" = "+(nombre1 % nombre2))
        break
    default:
        console.log("opération invalide")
         
}