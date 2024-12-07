// Import the 'toString' function
import toString from '../src/toString.js';

describe('toString.js', () => {
    describe('Primitive types', () => {
        // Positive test case
        it('should convert numbers to strings', () => {
            expect(toString(42)).toBe('42');
            expect(toString(0)).toBe('0');
            expect(toString(-42)).toBe('-42');
        });

        // Positive test case
        it('should convert booleans to strings', () => {
            expect(toString(true)).toBe('true');
            expect(toString(false)).toBe('false');
        });

        // Edge case
        it('should handle null and undefined by converting to string', () => {
            expect(toString(null)).toBe('null');
            expect(toString(undefined)).toBe('undefined');
        });

        // Edge case
        it('should convert NaN to "NaN"', () => {
            expect(toString(NaN)).toBe('NaN');
        });

        // Edge case
        it('should convert Infinity and -Infinity to strings', () => {
            expect(toString(Infinity)).toBe('Infinity');
            expect(toString(-Infinity)).toBe('-Infinity');
        });

        // Boundary case
        it('should preserve the sign of -0', () => {
            expect(toString(-0)).toBe('-0');
        });

        // Positive test case
        it('should convert symbols to their string representation', () => {
            const symbol = Symbol('test');
            expect(toString(symbol)).toBe(symbol.toString());
        });

        // Negative test case
        it('should not convert objects to strings other than "[object Object]"', () => {
            expect(toString({ key: 'value' })).not.toBe('{"key":"value"}');
        });

        // Negative test case
        it('should not convert functions to strings other than their string representation', () => {
            const func = () => {};
            expect(toString(func)).not.toBe('function () {}');
        });
    });

    describe('Complex types', () => {
        // Positive test case
        it('should convert arrays to strings', () => {
            expect(toString([1, 2, 3])).toBe('1,2,3');
            expect(toString([])).toBe('');
        });

        // Positive test case
        it('should convert nested arrays to strings', () => {
            expect(toString([1, [2, [3]]])).toBe('1,2,3');
        });

        // Edge case
        it('should handle arrays with null and undefined elements', () => {
            expect(toString([null, undefined])).toBe(',');
        });

        // Positive test case
        it('should handle array with mixed types', () => {
            expect(toString([1, 'a', null, undefined, true])).toBe('1,a,,,true');
        });

        // Positive test case
        it('should convert objects to "[object Object]"', () => {
            expect(toString({ key: 'value' })).toBe('[object Object]');
            expect(toString({})).toBe('[object Object]');
        });

        // Positive test case
        it('should convert objects with custom toString methods', () => {
            const customObj = {
                toString() {
                    return 'Custom Object';
                },
            };
            expect(toString(customObj)).toBe('Custom Object');
        });

        // Positive test case
        it('should convert functions to their string representation', () => {
            const func = () => {};
            expect(toString(func)).toBe(func.toString());
        });

        // Positive test case
        it('should convert Date objects to their string representation', () => {
            const date = new Date('2024-12-06T00:00:00.000Z');
            expect(toString(date)).toBe(date.toString());
        });
    });
});