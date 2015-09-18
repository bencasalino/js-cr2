
describe("wordReplacer", function() {
// test 1
  it("returns the word that was inputed by the user", function() {
    expect(wordReplace("taco", "taco", "burrito")).to.equal("burrito");
});
// test 2
  it("will output the replacement word if input string matches the word to find", function() {
    expect(wordReplace("Soccer", "Soccer", "found")).to.equal("found");
});
//test 3
  it("doesnt return replace word if 'no match' is found", function() {
    expect(wordReplace("pasta", "pizza", "cheese")).to.equal("no match");
});
//test 4
  it("searches the sentence for the input word, if found then replace", function() {
    expect(wordReplace("baseball is the best", "baseball", "soccer")).to.equal("soccer is the best");
});
// test 5
  it("returns 'nothing' if a specified word is NOT found in the sentence", function() {
    expect(wordReplace("im a computer", "frog", "dog")).to.equal("no match");
});
// test 6
  it("can handle different 'cases' but doesnt change the original input word", function() {
    expect(wordReplace("THAT gUy is CrAzY", "guy", "bAt")).to.equal("THAT bAt is CrAzY");
});
//stays at bottom to enclose describe function
});
