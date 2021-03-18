var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
    var myNewPets
    myNewPets = myPetsArray;
    myNewPetsArray.push("Bird", "Fish");
    var firstPet = myNewPetsArray[0];
    var lastPet = myNewPets[3];
    myNewPetsArray.unshift("Lion");

    return myNewPets['Lion', 'Cat', 'Bird']

}
console.log(myArrayFunction());
module.exports = myArrayFunction;