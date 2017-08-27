/* working with stings */

console.log("string.js");
let phrase = "The quick elf, brown fox and the brown cat ate lunch at the Taco House";

console.log("phrase index", phrase.indexOf("T"));
console.log("how about fox", phrase.indexOf("fox"));
console.log("phrase length", phrase.length);

let newPhrase = phrase.replace(/brown/g, "yellow");
console.log("newPhrase", newPhrase);

let greeting = "hello cohort 21";
let newGreeting = greeting.slice(3,8);
console.log("newGreeting", newGreeting);

let phraseSplit = phrase.split(' ');
console.log("phraseSplit", phraseSplit);

let exiting = "goodbye class";
let exitingUpper = exiting.toUpperCase();
console.log("exitingUpper", exitingUpper);

let newDialog = greeting.concat(" and ", exiting);