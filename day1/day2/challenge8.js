const prompt =require("prompt-sync")();

let nombre = prompt ("taper un nombre :");
let nmb =1;
while(nmb <= nombre){
console.log ("Mission",nmb,"--> score :",nmb *100)
    nmb++
}