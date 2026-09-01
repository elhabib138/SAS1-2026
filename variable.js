const prompt =require("prompt-sync")();

 let pseudo =prompt("taper votre pseudo :");
 let niveau =prompt("taper votre niveau :");
 let age =prompt("taper votre age :");
 let score =prompt ("taper votre score :");
 let pays =prompt(" taper votre pays :");
 console.log ("pseudo :",pseudo);
 console.log ("niveau :",niveau);
 console.log ("age :",age);
 console.log ("score :",score);
 console.log("pays :",pays);


//challenge 2
var budjet =prompt ("taper votre budjet en MAD:");
console.log ("votre budjet en EUR est :",budjet/ 11);


//challenge 3
var espce = prompt("taper voter espqce disponible en GB :");
console.log ("votre espace disponible en MB est :",(espce * 1024));


//challenge 4

var distance =prompt(" taper votre distance en KM :");
var carburant = prompt("taper votre consommation de carburant en litres :");

console.log("distance :",distance)
console.log("carburant :",carburant)
let consom = (carburant / distance);
let consommation =(consom* 100);
console.log ("votre consommation est :",consommation ,("L/100KM"))

// challenge 5
var durée = prompt("taper la durée du film en min :");
if (durée <= 60) {
    console.log ("court métrage");
} else if (durée > 60 , durée <= 120) {
    console.log("film standard")
} else {
    console.log("film long")
}

//challenge 6
let score1 =+( prompt(" taper score dr partie 1 :"))
let score2 =+(prompt(" taper score dr partie 2 :"))
let score3 =+(prompt(" taper score dr partie 3 :"))
let score4 =+(prompt(" taper score dr partie 4 :"))
let scoreT = score1+score2+score3+score4;
let moyenne = (scoreT / 4);
console.log ("partie 1 :",score1)
console.log ("partie 1 :",score2)
console.log ("partie 1 :",score3)
console.log ("partie 1 :",score4)
console.log ("scotre total est :",scoreT)
console.log ("moyenne est :",moyenne)





//challenge 7
let noteCC = prompt ("taper la note de controle :");
let noteP = prompt ("taper la note de projet :");
let noteE = prompt(" taper la note de l'examen :");
let notet = ((noteCC*2)+(noteE*5)+(noteP*3));
let noteF = notet / 10
console.log ("votre note finale est :",noteF)


//challenge 8
let ten = prompt(" taper ma tension :");
let intensité = prompt("taper l'intensité :");
let temps = prompt ("taper le temps :");
console.log ("énerie est :",(temps*ten*intensité))

//challenge 9
let x1=+prompt("taper un nomebre :");
let y1=+prompt("taper un nomebre :");
let z1=+prompt("taper un nomebre :");
let x2=+prompt("taper un nomebre :");
let y2=+prompt("taper un nomebre :");
let z2=+prompt("taper un nomebre :");
let distance1 =((((x1-x2)**2)+((y1-y2)**2)+((z1-z2)**2))**0.5);
console.log ("distance",distance1)

//challenge 10
let r =+prompt("taper le rayon en m :");
let h =+prompt(" taper la hauteur en m :");
let p =3.14159
let v =((p*(r**2))*h)
console.log ("volume est :",v)

//challenge 11
let longueur =+prompt("taper la longueur :");
let largeur =+prompt ("taper largeur :");
let surface =(longueur*largeur);
let périmétre =((longueur+largeur)*2);
console.log ("surface est :",surface)
console.log ("périmétre est :",périmétre)

//challenge 12
