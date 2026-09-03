let prompt=require("prompt-sync")();


//challenge 2
let nombre1 = prompt ("taper un nombre :");
if (nombre1>0){
    console.log("ce nombre est positif")
}else if (nombre1<0){
    console.log("ce nombre est négatif")
}else{
    console.log("ce nombre egal zéro")
}
