"use strict";

function getFilteredNumbers(sourceArray, isPos) {
    return sourceArray.filter(number => (isPos ? number > 0 : number < 0));
}

function logArrs() {
    for (let i = 0; i < arguments.length; i++)
        console.log(`${i+1} array: ${arguments[i]}`)
}

function getRepeats(sourceArray) {
    let mappedObj = {};
    sourceArray.forEach(element => {
        if (!mappedObj[element])
            mappedObj[element] = 0;
        mappedObj[element]++;
    });
    return mappedObj;
}

function logRepeats(mappedObj) {
    Object.keys(mappedObj).forEach(key => {
        console.log(`${key} - ${mappedObj[key]}`)
    });
}

const [arr1, arr2, arr3, arr4] = [[ 1, 2, 1, 2, 3.14, -4, 2, 1],
                                [ 15, -4, 2, -14.3, 2.41, 7, 1, 0],
                                [ -1, 9, 4, 2, 0, 11, -2, -17],
                                [ 3, 6, 13, -2, -6.9, 3, 0, 8]];

const filteredArr1 = getFilteredNumbers(arr1, true);
const filteredArr2 = getFilteredNumbers(arr2, true);
const filteredArr3 = getFilteredNumbers(arr3, false);
const filteredArr4 = getFilteredNumbers(arr4, false);
logArrs(filteredArr1, filteredArr2, filteredArr3, filteredArr4);

const mappedObj = getRepeats(arr1);
logRepeats(mappedObj);
