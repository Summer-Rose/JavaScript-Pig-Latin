var vowels = ["a", "e", "i", "o", "u"];

// var startsWithVowel = function(word) {
//   for (var i = 0; i < vowels.length; i++) {
//     if (word.charAt(0) == vowels[i]) {
//       var newWord = word.concat("ay");
//     }
//   }
//   return newWord;
// };

// var startsWithCon = function(word) {
//   for (var i = 0; i < vowels.length; i++) {
//     if (word.charAt(0) !== vowels[i]) {
//       var firstLetter = word.slice(0, 1);
//       var newWord = word.substr(1).concat(firstLetter);
//       debugger;
//       return startsWithCon(newWord);
//     } else {
//       return word;
//     }
//   }
// };

var startsWithCon = function(word) {
  if (vowels.indexOf(word.charAt(0)) == -1) {
    var firstLetter = word.slice(0, 1);
    var newWord = word.substr(1).concat(firstLetter);
    return startsWithCon(newWord);
  } else {
      return word.concat("ay");
    }
};
