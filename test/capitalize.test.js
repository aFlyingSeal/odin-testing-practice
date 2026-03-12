import capitalize from "../src/capitalize";

test("first character is a letter", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("first character is a digit", () => {
    expect(capitalize("1owkodw")).toBe("1owkodw");
})

test("first character is punctuation", () => {
    expect(capitalize("#javascript")).toBe("#javascript");
});

test("empty string", () => {
    expect(capitalize("")).toBe("");
});