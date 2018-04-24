function reverseNumber(number) {

    if (Number.isInteger(number)) {

        var numberString = number.toString();
        var reverseString = "";

        for (var i = numberString.length-1; i >=0; i--)
            reverseString += numberString[i];

        return parseInt(reverseString);
    }

    else
        return ("Please, enter a number");
}


console.log(reverseNumber(123456789));