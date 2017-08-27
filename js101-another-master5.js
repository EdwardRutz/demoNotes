
let myDog = {};
myDog.name = "HeyDawg";
myDog.breed = "mut";
myDog.gender = "male";
myDog.age = 4;

myDog.speak = function() {
		console.log("woof, woof");
}
console.log("myDog",myDog);
myDog.speak();

for (prop in myDog){
	console.log("prop", myDog[prop]);
}

let ourDogs = [];
ourDogs.push(owner: "Bob", name: "daawg", breed: "twist", age: 6});
ourDogs.push(owner: "matt", name: "lunchbox", breed: "wild", age: 4});
ourDogs.push(owner: "casey", name: "mr. butters", breed: "pound dog", age: 3});
ourDogs.push(owner: "brook", name: "littleworst", breed: "mutt", age: 2});

console.log("ourDogs", ourDogs);