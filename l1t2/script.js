function checkSimpleNumber(number) {

    if (number <= 1)
        return false;

    var counter = 0;

    for (var i = 1; i <= number; i++) {
        if (number%i === 0) {
            counter++;
        }
    }

    if (counter === 2)
        return true;
    else
        return false;
}

console.log(checkSimpleNumber(179));