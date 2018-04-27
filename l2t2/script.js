var arr = [ 1, 2, 1, 2, 3.14, 4, 2, 1];

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

console.log("Calculating numbers quantity: " + calculateRepsQuantity(arr));


