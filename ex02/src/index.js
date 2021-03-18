var temps = [31, 32, 19, 37, 29, 27, 55, 36, 17, 27, 42, 46, 29, 52, 21, 64, 91, 27, 31, 61];
var monday = [31, 32, 19, 37];
var tuesday = [29, 27, 55, 36];
var wednesday = [17, 27, 42, 46];
var thursday = [29, 52, 21, 64];
var friday = [91, 27, 31, 61];

function myArrayFunction(arr) {
    var newTemps = temps;
    var averageDayTemp=[];
    for (arr in monday) {
        sum = [0] + [1] + [2] + [3];
        monday = sum / 4;
        averageDayTemp.push(monday);


    }

    return averageDayTemp;
}

console.log(myArrayFunction());
module.exports = myArrayFunction;