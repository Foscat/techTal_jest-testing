const sum = require("../sum");

describe("sum function", () => {

    it("adds number and number", () => {
        expect(sum(1,2)).toEqual(3);
    });
    test("number + number", () => {
        expect(sum(1,2)).toStrictEqual(3);
    });
    // test('string and number', () => {
    //     expect(sum('1', 2)).toBe(3)
    // });
    // test('string and number strict', () => {
    //     expect(sum('1', 2)).toStrictEqual(3)
    // });

});