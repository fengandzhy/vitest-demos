import { assert,expect, it, test, describe } from 'vitest';


// test('another suite', () => {
//     it('toUpperCase', () => {
//         const result = 'foobar'.toUpperCase()
//         expect(result).toMatchSnapshot();
//     });
// });

// describe('suite', () => {
//     it('test', () => {
//         assert.equal(Math.sqrt(4), 2);
//     });
// });

test('Math.sqrt()', () => {
    expect(Math.sqrt(4)).toBe(2)
    expect(Math.sqrt(144)).toBe(12)
    expect(Math.sqrt(2)).toBe(Math.SQRT2)
});