var arr1 = [ 1, 2, 1, 2, 3.14, 4, 2, 1];
var arr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr3 = [ -1, -1, 0, -1, 2, 0, -1, 2];

function calculateRepsQuantity(sourceArray) {

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

console.log("Calculating numbers quantity: " + calculateRepsQuantity(arr1));
console.log("Calculating numbers quantity: " + calculateRepsQuantity(arr2));
console.log("Calculating numbers quantity: " + calculateRepsQuantity(arr3));


