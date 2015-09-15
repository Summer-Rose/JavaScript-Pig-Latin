describe('pigLatinWord', function() {
  it("moves consonants of word to end of word and attaches 'ay'", function() {
    expect(pigLatinWord("psychology")).to.equal("ologypsychay");
  });

  it("moves qu as a unit to the end of the word then attached 'ay'", function() {
    expect(pigLatinWord("squeal")).to.equal("ealsquay");
  })
});

describe('pigLatin', function() {
  it("accpet phrase and return pig Latin phrase array", function() {
    expect(pigLatin("Summer and Jen")).to.equal("ummersay anday enjay");
  });
});
