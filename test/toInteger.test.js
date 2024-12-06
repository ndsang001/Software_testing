import toInteger from '../src/toInteger.js';

describe('toInteger', () => {
    test('should convert numbers correctly', () => {
        expect(toInteger(4.6)).toBe(4);
        expect(toInteger(-4.6)).toBe(-4);
        expect(toInteger(0)).toBe(0);
    });

    test('should handle special number values', () => {
        expect(toInteger(Infinity)).toBe(Number.MAX_VALUE);
        expect(toInteger(-Infinity)).toBe(-Number.MAX_VALUE);
        expect(toInteger(NaN)).toBe(0);
    });

    test('should convert strings and other inputs', () => {
        expect(toInteger('5.6')).toBe(5);
        expect(toInteger('-5.6')).toBe(-5);
        expect(toInteger(null)).toBe(0);
        expect(toInteger(undefined)).toBe(0);
    });
});
