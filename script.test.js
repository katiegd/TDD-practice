const {
  calculator,
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
} = require("./script.js");

test("Addition", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtraction", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("Multiplication", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test("Division", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("String is capitalized.", () => {
  expect(capitalize("boop")).toBe("Boop");
});

test("String is reversed.", () => {
  expect(reverseString("Katie")).toBe("eitaK");
});

test("Caesar cipher is working", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Array analyzed", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
