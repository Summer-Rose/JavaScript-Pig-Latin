var vowels = ["a", "e", "i", "o", "u"];

var pigLatin = function(phrase){
  var words = phrase.toLowerCase().split(" ");
  var results = [];
  for (var i = 0; i < words.length; i++) {
    results.push(pigLatinWord(words[i]));
  }
  return results.join(" ");
};

var pigLatinWord = function(word, boolean) {
  var punctuation = "";
  var word = word;
  var lastChar = word.charAt(word.length - 1);

  if (lastChar.match(/[!,.?]/g)) {
    punctuation = lastChar;
    word = word.slice(0, -1);
  }

  if (word.charAt(0) == "q" && word.charAt(1) == "u") {
    var qu = word.slice(0, 2);
    var newWord = word.substr(2).concat(qu);
    return newWord.concat("ay");
  } else if (vowels.indexOf(word.charAt(0)) == -1) {
    var firstLetter = word.slice(0, 1);
    var newWord = word.substr(1).concat(firstLetter);
    return pigLatinWord(newWord);
  } else {
    if (punctuation !== "") {
      var addAy = word.concat("ay");
      var addPunc = addAy.concat(punctuation);
      return addPunc;
    } else {
      return word.concat("ay");
    }
  }
};


////////////////////INTERFACE/////////////////////
$(document).ready(function() {
  $("form#getPhrase").submit(function(event) {
    input = $("input#phrase").val();

    var result = pigLatin(input);

    $(".pigLatin").text(result);
    $(".userEntry").text(input);

    $("#result").show();
    event.preventDefault();
  });
});
