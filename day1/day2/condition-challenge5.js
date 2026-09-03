let prompt=require("prompt-sync")();



//challenge 5
let note1 =prompt("taper votre note sur 20 :");
if (note1 >20 || note1 <0 ){
    console.log("note invalide")
}else{
if (note1 < 10){
    console.log("échec")
}else if (note1 >=10 || note1 <= 11.99){
    console.log("passable")
}else if (note1 >=12 || note1 <=13.99) {
    console.log("assez bien")
}else if (note1 >=14 || note1 <=15.99){
    console.log("bien")
}else if (note1 >=16 || note1 <=17.99){
     console.log("très bien")
}else if (note1 >= 18){
     console.log("excellent")
}
}


