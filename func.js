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
    "HIPPOPOTEMUS",
    "Michael",
  ];
  var word = arrayPicker(words);
  return shuffleWord(word);
};

function shuffleWord(parameter) {
  var word = parameter;
  // control structure
  // looping and branching
  let i = 0;
  var new_word = "";
  while (i < parameter.length) {
    var l1 = arrayPicker(word);
    new_word += l1;
    word = word.replace(l1, "");
    i++;
  }
  return new_word;
}

module.exports = { generateRandomAlphabet, generateWord };
