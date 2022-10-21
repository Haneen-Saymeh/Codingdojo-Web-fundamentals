var newWord = " ";

function revword(word){
    for (var i  = word.length-1; i>=0; i--){
        newWord += word[i];
    }

    return newWord;
}

console.log(revword("creature"));