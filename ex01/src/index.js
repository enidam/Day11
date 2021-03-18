var myArr = [2, 4, 0, 8, 10];
myArr[0] = 2;
myArr[1] = 4;
myArr[2] = 0;
myArr[3] = 8;
myArr[4] = 10;

function myArrayFunction(arr) {
    var myItems = myArr;
    myItems[2] = 6;
    return myItems;
}


console.log(myArrayFunction())
module.exports = myArrayFunction