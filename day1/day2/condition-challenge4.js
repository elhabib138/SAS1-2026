let prompt=require("prompt-sync")();


//challenge 4
let montant=prompt("montant :");
if (montant>= 500){
    console.log("montant est gratuit")
    console.log("total payer",montant)
}else{
    console.log("montant est 40 DH")
    console.log("total payer est ",(+montant+40))
}