var vowels = ["a", "e", "i", "o", "u"];

var pigLatinWord = function(word) {
  if (word.charAt(0) == "q" && word.charAt(1) == "u") {
    var qu = word.slice(0, 2);
    var newWord = word.substr(2).concat(qu);
    return newWord.concat("ay");
  } else if (vowels.indexOf(word.charAt(0)) == -1) {
    var firstLetter = word.slice(0, 1);
    var newWord = word.substr(1).concat(firstLetter);
    return pigLatinWord(newWord);
  } else {
      return word.concat("ay");
    }
};
