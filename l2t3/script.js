function calculateRepsQuantity(sourceArray) {

    var positiveArray = sourceArray.filter(function(number) {
        return number > 0;
    });

    var negativeArray = sourceArray.filter(function(number) {
        return number < 0;
    });

    var calculateRepsQuantity = function(sourceArray) {
    resultArray = sourceArray.map(function(element, index, array) {
        var quantity = 0;
        arr.forEach(function (element) {
            if (element === array[index])
                quantity++;
        });
        return element + " - " + quantity;
    }).filter(function (element, index, array) {
        return array.indexOf(element) === index;
    });

    return resultArray;
    }

    console.log("Positive array: " + positiveArray);
    console.log("Negative array: " + negativeArray);
    console.log("Calculating numbers quantity: " + calculateRepsQuantity(sourceArray));
}

var arr1 = [ 1, 2, 1, 2, 3.14, -4, 2, 1];
var arr2 = [ 15, -4, 2, -14.3, 2.41, 7, 1, 0];
var arr3 = [ -1, 9, 4, 2, 0, 11, -2, -17];
var arr4 = [ 3, 6, 13, -2, -6.9, 3, 0, 8];

calculateRepsQuantity(arr1);
calculateRepsQuantity(arr2);
calculateRepsQuantity(arr3);
calculateRepsQuantity(arr4);

