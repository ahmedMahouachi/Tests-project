const {
  addition,
  soustraction,
  multiplication,
  division,
} = require("../src/calc");

test("addition", () => {
  expect(addition(2, 5)).toBe(7);
});

test("Soustraction", () => {
  expect(soustraction(10, 3)).toBe(7);
});

test("Multiplication", () => {
  expect(multiplication(3, 2)).toBe(6);
});

test("Division", () => {
  expect(division(10, 2)).toBe(5);
});

test("division par zero", () => {
  expect(() => division(10, 0)).toThrow("Division par 0 interdite !");
});
