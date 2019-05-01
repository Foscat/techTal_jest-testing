const functions = require("../nodemon");

describe("functions function",() => {
    it("adds 1+2  to = 3", () => {
        expect(functions.add(1,2)).toBe(3);
    })
})

test("put 2 strings tewgether", () => {
    expect(functions.stringafy("Ben","Dover")).toMatch("BenDover");
});

test("See if you need help", () => {
    expect(functions.needHelp("kinda", "yeah")).toBeFalsy();
});

test("See if you need help", () => {
    expect(functions.needHelp("yeah", "yeah")).toBeTruthy();
});