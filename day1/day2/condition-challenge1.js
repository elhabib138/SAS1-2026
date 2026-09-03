const prompt =require("prompt-sync")();

//challenge 1

let montant = prompt ("taper votre montant : ");
let frais ="";
let total ="";

if (montant >= 500){
    console.log ("livraison gratuite")
}else if(montant>=300){
    console.log("frais de livraison : 10 DH")
    console.log("total à payer :",+montant+10 +" DH")
}else if(montant>=100){
    console.log("frais de livraison : 20 DH")
    console.log("total à payer :",+montant+20 +" DH")
}else{
    console.log("frais de livraison : 30 DH")
    console.log("total à payer :",+montant+30 +" DH")
}