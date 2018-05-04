"use strict";

function isAnagrams(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length)
        return false;
    let sortedFirstWord = firstWord.split('').sort().join('');
    let sortedSecondWord = secondWord.split('').sort().join('');
    for (let i = 0; i < sortedFirstWord.length; i++)
        if (sortedFirstWord[i] !== sortedSecondWord[i])
            return false;
    return true;
}

console.log(isAnagrams("melon", "lemon"));
console.log(isAnagrams("ball", "lab"));