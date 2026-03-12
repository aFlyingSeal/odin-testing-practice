import analyzeArray from "../src/analyze-array";

test("array 1", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test("array 2", () => {
    expect(analyzeArray([23, -14, 102, 82, -55, 79, 2, -9, 46, 114])).toEqual({
        average: 37,
        min: -55,
        max: 114,
        length: 10
    });
});

test("empty array", () => {
    expect(analyzeArray([])).toEqual({
        average: null,
        min: null,
        max: null,
        length: 0
    });
});