const {createItem} = require('../todo');

describe('createItem', () => {
    it('creates object with properties', () => {
        const text = 'Practice deep equality assertions'
        const expected = {completed: false, text}
        const received = createItem(text)
        expect(received).toStrictEqual(expected)
    });
});

describe('replace text', () => {
    it('creates object with properties', () => {
        const text = "Yayy I made it"
        const expected = {text}
        const original = createItem('Replace the initial text')
        const received = replaceText(original, text)
    });
});

describe('createItem', () => {
    it('creates object with properties', () => {
        const expected = {completed: true}
        const original = createItem('Toggle its completedness')
        const received = toggleCompleted(original)
    });
});

describe('toggleItem', () => {
    test('from false to true', () => {
        const expected = {completed: true}
        const original = createItem('Toggle its completedness')
        const received = toggleCompleted(original)
        expect(received).toMatchObject(expected) // properties
        expect(received).not.toBe(expected) // instance
    });
});

// describe('Object.is', () => {
//     it('does distinguish ­0 from 0', () => {
//         expect(Object.is(­0, 0)).toStrictEqual(false)
//         expect(­0).not.toStrictEqual(0)
//     })
//     it('does not distinguish NaN from NaN', () => {
//         expect(Object.is(NaN, NaN)).toStrictEqual(true)
//         expect(NaN).toStrictEqual(NaN)
//     })
// })

// describe('strict equality', () => {
//     it('does not distinguish ­0 from 0', () => {
//         expect(­0 === 0).toStrictEqual(true)
//     })
//     it('does distinguish NaN from NaN', () => {
//         expect(NaN === NaN).toStrictEqual(false)
//     })
// })

