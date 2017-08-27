"use strict";

let skyIsBlue = true;
if (skyIsBlue) {
	console.log("yeah blue sky");
} else {
	console.log("other color");
}

let jedi = ["skywalker", "Yoda", "Obi-wan", "Qui-Gon", "windu"];
let jediText = "";

console.log("how many jedi", jedi.length);

for (let i = 0; i < jedi.length; i++){
	console.log("what is...", i);
	jediText += '<li>${jedi[i]}</li>';
}

console.log("jediText", jediText);

document.getElementById("demo").innerHtml = jediText;


let color = ["red", "yellow", "blue", "green", "orange", "purple"];
console.log("reversColors", reversColors);
