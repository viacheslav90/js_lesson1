"use strict";

const arr = [ 1, 2, 1, 2, 3.14, 4, 2, 1];
let mappedObj = {};

arr.forEach(element => {
    if (!mappedObj[element])
        mappedObj[element] = 0;
    mappedObj[element]++;
    });

Object.keys(mappedObj).forEach(key => {
  console.log(`${key} - ${mappedObj[key]}`)
});