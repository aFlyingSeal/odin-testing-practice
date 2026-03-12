import { calculator } from "../src/calculator";

test("basic arithmetic operations", () => {
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.substract(1, 1)).toBe(0);
    expect(calculator.multiply(1, 2)).toBe(2);
    expect(calculator.divide(1, 2)).toBe(0.5);
});

test("divide by zero", () => {
    expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by zero");
});

test("invalid input", () => {
    expect(() => calculator.add("A", 1)).toThrow("Invalid input");
});