// describe('toLowerCase', function() {
//   it("converts entry to lower case", function() {
//     expect(stripEntry("EpicoDus rOcKs!")).to.equal(result);
//   });
// });

describe('startsWithVowel', function() {
  it("Adds ay to end of word if it starts with a vowel", function() {
    expect(startsWithVowel("epicodus")).to.equal("epicodusay");
  });
});

describe('startsWithCon', function() {
  it("moves first letter of word to end of word and attaches 'ay'", function() {
    expect(startsWithCon("piglatin")).to.equal("iglatinpay");
  });
});
