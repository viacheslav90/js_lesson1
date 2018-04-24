function calculateSum(number) {

    var result = 0;

    for (var i = 1; i <= number; i++) {
        result += 1 / i;
    }

    return result;
}

console.log(calculateSum(5));