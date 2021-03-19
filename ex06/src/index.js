function multiplyArrayFunction(myArray) {
    var product=2*5*6*7*8*9;
    var sum;
    var myArray;
    myArray = [
        
    ];

    for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray[i].length; j++) {
            console.log(myArray[i], [j]);
        
        }
    }



    return product;

};
console.log(multiplyArrayFunction());
module.exports = multiplyArrayFunction;