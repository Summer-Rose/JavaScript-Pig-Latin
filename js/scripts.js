var vowels = ["a", "e", "i", "o", "u"];

var pigLatin = function(){

}

var startsWithVowel = function(word) {
  for (var i = 0; i < vowels.length; i++) {
    if (word.charAt(0) == vowels[i]) {
      var newWord = word.concat("ay");
    }
  }
  return newWord;
}

var startsWithCon = function(word) {
  for (var i = 0; i < vowels.length; i++) {
    if (word.charAt(0) !== vowels[i]) {
      var firstLetter = word.charAt(0);
      var newWord = word.slice(1, word.length).concat(firstLetter).concat("ay");
    }
  }
  return newWord;
}
