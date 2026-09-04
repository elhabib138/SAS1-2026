const prompt =require("prompt-sync")();
let nom=prompt("taper votre nom : ");
let prenom =prompt ("taper votre prenom : ");


function genererEmail(){
    console.log(nom+"."+prenom+"@entreprise.com")
}
 genererEmail()