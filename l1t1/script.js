function findRoot(a, b, c, result) {

    var d = Math.pow(b, 2) - 4*a*(c-result);

       if (d === 0) {
            var x = (-b)/(2*a);
            console.log("This quadratic equation has one root: x = " + x);
        } else if (d > 0) {
            var x1 = (-b+Math.sqrt(d))/(2*a);
            var x2 = (-b-Math.sqrt(d))/(2*a);
            console.log("This quadratic equation has two roots: x1 = " + x1 +", x2 = " + x2);
        } else
            console.log("This quadratic equation has no roots");
}


findRoot(2, -8, 12, 32);