import reverseString from "../src/reverse-string";

test("reverses a string", () => {
    expect(reverseString("Hello")).toBe("olleH");
});

test("reverses a complex string", () => {
    expect(reverseString("#12he  odin7& CrAzy ###@ ")).toBe(" @### yzArC &7nido  eh21#");
});

test("minimum string length", () => {
    expect(reverseString("a")).toBe("a");
});

test("empty string", () => {
    expect(reverseString("")).toBe("");
});

