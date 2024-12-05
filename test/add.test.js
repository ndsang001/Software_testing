import add from '../src/add.js';

describe('add', () => {
    test('should add two numbers correctly', () => {
        expect(add(6, 4)).toBe(10);
        expect(add(-3, 3)).toBe(0);
        expect(add(0, 0)).toBe(0);
        expect(add(1.5, 2.5)).toBe(4);
    });

    test('should return the value if only one argument is provided', () => {
        expect(add(5, undefined)).toBe(5);
        expect(add(undefined, 5)).toBe(5);
    });

    test('should return default value (0) if both arguments are undefined', () => {
        expect(add(undefined, undefined)).toBe(0);
    });

    test('should handle string inputs by concatenating them', () => {
        expect(add('hello', 'world')).toBe('helloworld');
        expect(add('foo', undefined)).toBe('foo');
        expect(add(undefined, 'bar')).toBe('bar');
    });

    test('should handle mixed string and number inputs', () => {
        expect(add('hello', 5)).toBe('hello5');
        expect(add(5, 'world')).toBe('5world');
    });

    test('should convert non-string/non-number inputs to numbers', () => {
        expect(add(true, false)).toBe(1); // true = 1, false = 0
        expect(add(null, null)).toBe(0); // null = 0
        expect(add(null, 5)).toBe(5); // null = 0
    });
});