const prompt =require("prompt-sync")();


//challenge 2

let N = prompt("taper un nombre :");
console.log("N = ",N)
for (let nombre1=1 ; nombre1 <=N ;nombre1++){
    if (nombre1 % 2 == 0){
        console.log (nombre1)
    }
}
