const prompt =require("prompt-sync")();

//challenge 2
console.log ("taper r pour rouge")
console.log ("taper opour orange")
console.log ("taper v pour vert")

let couleur =prompt("taper le couleur de feu :");

if(couleur =="r"){
    console.log("aretez-vous")
}else if( couleur =="o"){
    console.log("ralentissez")
}else if(couleur =="v"){
    console.log("vous pouvez passer")
}else{
    console.log("invalide")
}
