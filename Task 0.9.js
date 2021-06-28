function vowels(str){
    var input = [];
    var tmpVowels = str.replace(/[^aeiou]/gi,"").split("");
    for(var i = 0; i < tmpVowels.length; i++){
        if(input.indexOf(tmpVowels[i].toLowerCase()) == -1){
           input.push(tmpVowels[i].toLowerCase());
        }          
    }
    return input.toString();
}

console.log(vowels("muswazu"));
