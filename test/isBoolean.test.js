import isBoolean from '../src/isBoolean.js';

describe('isBoolean', () => {
    // Positive test cases for primitive boolean values
    describe('Primitive boolean values', () => {
        test('should return true for true', () => {
            expect(isBoolean(true)).toBe(true);
        });

        test('should return true for false', () => {
            expect(isBoolean(false)).toBe(true);
        });
    });

    // Positive test cases for Boolean objects
    describe('Boolean objects', () => {
        test('should return true for new Boolean(true)', () => {
            expect(isBoolean(new Boolean(true))).toBe(true);
        });

        test('should return true for new Boolean(false)', () => {
            expect(isBoolean(new Boolean(false))).toBe(true);
        });
    });

    // Negative test cases for non-boolean primitive values
    describe('Non-boolean primitive values', () => {
        test('should return false for number 0', () => {
            expect(isBoolean(0)).toBe(false);
        });

        test('should return false for empty string', () => {
            expect(isBoolean('')).toBe(false);
        });

        test('should return false for null', () => {
            expect(isBoolean(null)).toBe(false);
        });

        test('should return false for undefined', () => {
            expect(isBoolean(undefined)).toBe(false);
        });

        test('should return false for number 1', () => {
            expect(isBoolean(1)).toBe(false);
        });

        test('should return false for string "true"', () => {
            expect(isBoolean('true')).toBe(false);
        });

        test('should return false for Symbol', () => {
            expect(isBoolean(Symbol())).toBe(false);
        });
    });

    // Negative test cases for non-boolean objects
    describe('Non-boolean objects', () => {
        test('should return false for empty array', () => {
            expect(isBoolean([])).toBe(false);
        });

        test('should return false for empty object', () => {
            expect(isBoolean({})).toBe(false);
        });

        test('should return false for new Number(1)', () => {
            expect(isBoolean(new Number(1))).toBe(false);
        });

        test('should return false for new String("true")', () => {
            expect(isBoolean(new String('true'))).toBe(false);
        });

        test('should return false for new Date()', () => {
            expect(isBoolean(new Date())).toBe(false);
        });

        test('should return false for new RegExp("")', () => {
            expect(isBoolean(new RegExp(''))).toBe(false);
        });
    });

    // Negative test cases for functions
    describe('Functions', () => {
        test('should return false for arrow function', () => {
            expect(isBoolean(() => {})).toBe(false);
        });

        test('should return false for function declaration', () => {
            expect(isBoolean(function() {})).toBe(false);
        });
    });
});