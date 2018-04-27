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

var arr = [ 1, 2, 1, 2, 3.14, 4, 2, 1];
calculateRepsQuantity(arr);

