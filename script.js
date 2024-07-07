// 1. A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(string) {
  const firstLetter = string.slice(0, 1).toUpperCase();
  const restOfWord = string.slice(1);
  const newWord = firstLetter + restOfWord;
  return newWord;
}

// 2. A reverseString function that takes a string and returns it reversed.
function reverseString(string) {
  let newString = "";
  let length = string.length;
  for (let i = length - 1; i >= 0; i--) {
    let currenChar = string[i];
    newString += currenChar;
  }
  return newString;
}

// 3. A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
const calculator = {
  add: function add(x, y) {
    return x + y;
  },
  subtract: function subtract(x, y) {
    return x - y;
  },
  multiply: function multiply(x, y) {
    return x * y;
  },
  divide: function divide(x, y) {
    return x / y;
  },
};

// 4. A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.
function caesarCipher(string, shiftFactor) {
  let newString = "";
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (string[i] === " ") {
        newString += " ";
      }

      if (string[i] === alphabet[j]) {
        if (j + shiftFactor > alphabet.length - 1) {
          newString += alphabet[j + shiftFactor - alphabet.length];
        }
        newString += alphabet[j + shiftFactor];
      }
    }
  }
  return newString;
}

// 5. An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

module.exports = { calculator, capitalize, reverseString, caesarCipher };
