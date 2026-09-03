let prompt=require("prompt-sync")();


//challenge 3
let note =prompt("taper votre note sur 20 :");
if (note >20 || note <0 ){
    console.log("note invalide")
}else{
if (note >=10){
    console.log("résultat Admis")
}else{
    console.log("résultat non Admis")
}
}