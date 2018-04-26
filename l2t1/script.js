var a = [1, 2,-1, 3, 6, -2, -4, -109, 0, 6, -2, 0];


var b = a.filter(function(number) {
    return number > 0;
});

var c = a.filter(function(number) {
    return number < 0;
});


console.log("Array with positive numbers: " + b);
console.log("Array with negative numbers: " + c);

