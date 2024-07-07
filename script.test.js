const {
  calculator,
  capitalize,
  reverseString,
  caesarCipher,
} = require("./script.js");

test("Addition works", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtraction works", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("Multiplication works", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test("Division works", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("String is capitalized.", () => {
  expect(capitalize("boop")).toBe("Boop");
});

test("String is reversed.", () => {
  expect(reverseString("Katie")).toBe("eitaK");
});

test("Caesar cipher is working", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
