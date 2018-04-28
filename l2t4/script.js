function isAnagrams(firstWord, secondWord) {

    if (firstWord.length !== secondWord.length)
        return false;

    var sortedFirstWord = firstWord.split('').sort().join('');
    var sortedSecondWord = secondWord.split('').sort().join('');

    for (var i = 0; i < sortedFirstWord.length; i++)
        if (sortedFirstWord[i] !== sortedSecondWord[i])
            return false;
    return true;

}

console.log(isAnagrams("melon", "lemon"));
console.log(isAnagrams("ball", "lab"));