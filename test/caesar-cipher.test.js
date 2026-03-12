import { caesarCipher } from "../src/caesar-cipher";

test("shifts word (all lowercase)", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("shifts word (all uppercase)", () => {
    expect(caesarCipher("WORLD", 2)).toBe("YQTNF");
});

test("wrapping from z to a", () => {
    expect(caesarCipher("buzzy", 4)).toBe("fyddc");
});

test("ignore punctuations and digits", () => {
    expect(caesarCipher("11th, odin project!?", 3)).toBe("11wk, rglq surmhfw!?");
});

test("mixed test cases", () => {
    expect(caesarCipher("123? I loVe bUZzy. bee!?", 2)).toBe("123? K nqXg dWBba. dgg!?");
});