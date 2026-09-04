const prompt =require("prompt-sync")();


function calculerAgeChien (){
    let age =prompt("taper l age de votre chien :")
    let ageDeChien = age * 7
     return console.log("age de votre chien est : " +ageDeChien +" ans de chien")
}
calculerAgeChien()