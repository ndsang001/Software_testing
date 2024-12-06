import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
    test('should return true for null and undefined', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
    });

    test('should return true for empty arrays', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('should return true for empty objects', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('should return true for empty strings', () => {
        expect(isEmpty('')).toBe(true);
    });

    test('should return false for non-empty arrays', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('should return false for non-empty objects', () => {
        expect(isEmpty({ key: 'value' })).toBe(false);
    });

    test('should return false for non-empty strings', () => {
        expect(isEmpty('hello')).toBe(false);
    });

    test('should return true for numbers and booleans', () => {
        expect(isEmpty(0)).toBe(true); // 0 is treated as empty
        expect(isEmpty(false)).toBe(true); // false is treated as empty
    });

    test('should return true for functions (aligned with isEmpty.js behavior)', () => {
        expect(isEmpty(() => {})).toBe(true); // Functions are treated as empty
    });

    test('should return true for symbols (aligned with isEmpty.js behavior)', () => {
        expect(isEmpty(Symbol('test'))).toBe(true); // Symbols are treated as empty
    });
});
