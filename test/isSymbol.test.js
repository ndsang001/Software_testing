import isSymbol from '../src/isSymbol.js';

describe('isSymbol', () => {
    test('should return true for symbol values', () => {
        expect(isSymbol(Symbol('test'))).toBe(true);
        expect(isSymbol(Symbol.iterator)).toBe(true);
    });

    test('should return false for non-symbol values', () => {
        expect(isSymbol('test')).toBe(false);
        expect(isSymbol(123)).toBe(false);
        expect(isSymbol(null)).toBe(false);
        expect(isSymbol(undefined)).toBe(false);
    });
});
