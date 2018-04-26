var arr = [ 1, 2, 1, 2, 3.14, 4, 2, 1];

function calculateRepsQuantity(sourceArray) {

    var resultArray = [];

    var countNumbers = function (arr, number) {
        var counter = 0;
        arr.forEach(function (element) {
            if (element === number)
                counter++;
        });
        return counter;
    };

    for (var i = 0; i < sourceArray.length; i++) {
        var quantity = countNumbers(sourceArray, sourceArray[i]);
        var result = sourceArray[i] + " - " + quantity;
        resultArray.push(result);
    }

    resultArray = resultArray.filter(function (element, index) {
        return resultArray.indexOf(element) === index;
    });

    return resultArray;
}

console.log(calculateRepsQuantity(arr));


