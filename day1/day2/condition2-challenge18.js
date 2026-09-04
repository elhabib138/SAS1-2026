const prompt=require("prompt-sync")();

console.log("MA --> Maroc")
console.log("FR --> France ")
console.log("ES --> Espagne")
console.log("US -->Etats-unis")
console.log("CA -->Canada ")
console.log("JB -->Japan ")
console.log("BR -->brésil ")

let code = prompt ("taper votre code : ")

switch (code){
    case"MA":
        console.log("code : Maroc");
        console.log("devise : Dirham marocain");
    break;
     case"FR":
        console.log("code : France");
        console.log("devise : Euro");
    break;
     case"ES":
        console.log("code : Espagne");
        console.log("devise : Euro");
        break;
    case"US":
        console.log("code : Etats-Unis");
        console.log("devise : Dollar américain");
        break;
    case"JP":
        console.log("code : Japan");
        console.log("devise : Yen japonase")
        break;
    case"BR":
        console.log("code : Brésil");
        console.log("devise : Réal brésiline")
        break;
    case"CA":
        console.log("code : Canada");
        console.log("devise : Dollar canadien")
        break;
    default:
        console.log("code invalide")
     
}
