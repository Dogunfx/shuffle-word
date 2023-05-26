function arrayPicker(parameter) {
  var picker = Math.ceil(Math.random() * (parameter.length - 1));
  var computer_aph = parameter[picker];
  return computer_aph;
}

var generateRandomAlphabet = function () {
  var apl = "abcdefghijklmnopqrsstuvwxyz";
  return arrayPicker(apl);
};

var generateWord = function () {
  const words = [
    "Man",
    "Woman",
    "Come",
    "sit",
    "stand",
    "play",
    "Coding",
    "Michael",
  ];
  var word = arrayPicker(words);
  return shuffleWord(word);
};

function shuffleWord(parameter) {
  var word = parameter;

  // control structure

  // looping and branching

  var l1 = arrayPicker(word);
  word = word.replace(l1, "");
  var l2 = arrayPicker(word);
  word = word.replace(l2, "");
  var l3 = arrayPicker(word);
  word = word.replace(l3, "");
  var new_word = l1 + l2 + l3 + word;

  return new_word;
}

module.exports = { generateRandomAlphabet, generateWord };
