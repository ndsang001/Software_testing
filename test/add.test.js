import add from '../src/add.js';

describe('add', () => {
    describe('Adding two numbers', () => {
        // Positive test case
        test('should add two positive numbers correctly', () => {
            expect(add(6, 4)).toBe(10);
        });

        // Positive test case
        test('should add a positive and a negative number correctly', () => {
            expect(add(-3, 3)).toBe(0);
        });

        // Positive test case
        test('should add two floating-point numbers correctly', () => {
            expect(add(1.5, 2.5)).toBe(4);
        });

        // Positive test case
        test('should add two negative numbers correctly', () => {
            expect(add(-10, -4)).toBe(-14);
        });

        // Positive test case
        test('should add a positive number and zero correctly', () => {
            expect(add(7, 0)).toBe(7);
        });

        // Boundary test case
        test('should add two large positive numbers correctly', () => {
            expect(add(9999999999, 1)).toBe(10000000000);
        });
    });

    describe('Handling single argument', () => {
        // Edge case
        test('should return the value if only one argument is provided', () => {
            expect(add(5, undefined)).toBe(5);
            expect(add(undefined, 5)).toBe(5);
        });

        // Edge case
        test('should return default value (0) if both arguments are undefined', () => {
            expect(add(undefined, undefined)).toBe(0);
        });
    });

    describe('Handling string inputs', () => {
        // Positive test case
        test('should handle string inputs by concatenating them', () => {
            expect(add('hello', 'world')).toBe('helloworld');
            expect(add('foo', undefined)).toBe('foo');
            expect(add(undefined, 'bar')).toBe('bar');
        });

        // Positive test case
        test('should handle mixed string and number inputs', () => {
            expect(add('hello', 5)).toBe('hello5');
            expect(add(5, 'world')).toBe('5world');
        });
    });

    describe('Handling non-string/non-number inputs', () => {
        // Edge case
        test('should convert non-string/non-number inputs to numbers', () => {
            expect(add(true, false)).toBe(1); // true = 1, false = 0
            expect(add(null, null)).toBe(0); // null = 0
            expect(add(null, 5)).toBe(5); // null = 0
        });
    });

    describe('Negative test cases', () => {
        // Negative test case
        test('should throw an error if no arguments are provided', () => {
            expect(() => add()).toThrow();
        });

        // Negative test case
        test('should throw an error if non-numeric and non-string inputs are provided', () => {
            expect(() => add({}, [])).toThrow();
        });

        // Negative test case
        test('should throw an error if a function is provided as an argument', () => {
            expect(() => add(() => {}, 5)).toThrow();
            expect(() => add(5, () => {})).toThrow();
        });
    });
});