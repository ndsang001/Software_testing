import toInteger from '../src/toInteger.js';

describe('toInteger', () => {
    describe('Convert numbers correctly', () => {
        // Positive case
        test('should convert positive float to integer', () => {
            expect(toInteger(4.6)).toBe(4);
        });

        // Positive case
        test('should convert negative float to integer', () => {
            expect(toInteger(-4.6)).toBe(-4);
        });

        // Boundary case
        test('should convert zero to zero', () => {
            expect(toInteger(0)).toBe(0);
        });

        // Edge case
        test('should convert Number.MIN_VALUE to 0', () => {
            expect(toInteger(Number.MIN_VALUE)).toBe(0);
        });

        // Edge case
        test('should convert a large positive float to an integer', () => {
            expect(toInteger(1.7976931348623157e+308)).toBe(Number.MAX_VALUE);
        });
    });

    describe('Handle special number values', () => {
        // Edge case
        test('should convert Infinity to Number.MAX_VALUE', () => {
            expect(toInteger(Infinity)).toBe(Number.MAX_VALUE);
        });

        // Edge case
        test('should convert -Infinity to -Number.MAX_VALUE', () => {
            expect(toInteger(-Infinity)).toBe(-Number.MAX_VALUE);
        });

        // Edge case
        test('should convert NaN to 0', () => {
            expect(toInteger(NaN)).toBe(0);
        });
    });

    describe('Convert strings and other inputs', () => {
        // Positive case
        test('should convert string representation of a positive float to integer', () => {
            expect(toInteger('5.6')).toBe(5);
        });

        // Positive case
        test('should convert string representation of a negative float to integer', () => {
            expect(toInteger('-5.6')).toBe(-5);
        });

        // Edge case
        test('should convert null to 0', () => {
            expect(toInteger(null)).toBe(0);
        });

        // Edge case
        test('should convert undefined to 0', () => {
            expect(toInteger(undefined)).toBe(0);
        });

        // Positive case
        test('should convert a boolean to 0 or 1', () => {
            expect(toInteger(true)).toBe(1);
            expect(toInteger(false)).toBe(0);
        });

        // Negative case
        test('should convert an object to 0', () => {
            expect(toInteger({})).toBe(0);
        });

        // Negative case
        test('should convert an array to 0', () => {
            expect(toInteger([1, 2, 3])).toBe(0);
        });
    });
});