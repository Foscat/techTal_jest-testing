const createElement = require("../createElement");

// describe("create element function", () => {
//     it("creates object with properties", () => {
//         const received = createElement("span");

//         expect(received.nodeName).toStrictEqual("SPAN");
//         expect(received.nodeType).toStrictEqual(1);
//     });
// });

// describe('createElement', () => {
//     it('creates object with properties', () => {
//         const expected = {nodeName: 'SPAN', nodeType: 1}
//         const received = createElement('span')
//         expect(received).toStrictEqual(expected)
//     })
// })

describe('createElement', () => {
    it('creates object with properties', () => {
        const expected = {
            attributes: [],
            childNodes: [],
            nodeName: 'SPAN',
            nodeType: 1,
        }
        const received = createElement('span')
        expect(received).toStrictEqual(expected)
    })
})