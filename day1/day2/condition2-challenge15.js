const prompt=require("prompt-sync")();

let nombrehHeures = prompt("taper le nombre d'heures : ");
let réduction =prompt ("si vous avez une carte membre taper o si non taper n : ")
let nmb =parseInt
let prix =parseInt

function foo(){
    if (réduction == 1){
        console.log("le prix est : "+prix*0.8 +" DH")
    }else if(réduction == 0) {
        console.log("le prix est : "+prix+" DH")
    }else{
        console.log("invalide")
    }
}

if (nombrehHeures == 1){
    prix =5
    foo()
}else if (nombrehHeures == 2){
    prix=7
    foo()
}else if(nombrehHeures == 3){
    prix=11
    foo()
}else{
    nmb=nombrehHeures - 3
    prix=+(11 + (+2*nmb))
    foo()
}
