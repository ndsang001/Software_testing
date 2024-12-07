jest.mock('../src/toString.js', () => {
    return jest.fn((input) => {
        if (input === null || input === undefined) return '';
        return String(input);
    });
});

import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
    // Basic functionality tests
    describe('Basic functionality', () => {
        // Positive test case
        test('should capitalize the first character and lowercase the rest', () => {
            expect(capitalize('FRED')).toBe('Fred');
            expect(capitalize('hello')).toBe('Hello');
            expect(capitalize('Fred')).toBe('Fred');
        });

        // Boundary test case
        test('should return an empty string if input is empty', () => {
            expect(capitalize('')).toBe('');
        });
    });

    // Non-string input tests
    describe('Non-string inputs', () => {
        // Edge case
        test('should handle non-string inputs gracefully', () => {
            expect(capitalize(123)).toBe('123');
            expect(capitalize(null)).toBe(''); // Simulated behavior
            expect(capitalize(undefined)).toBe(''); // Simulated behavior
        });
    });

    // Special character tests
    describe('Special characters', () => {
        // Edge case
        test('should handle strings with special characters', () => {
            expect(capitalize('!hello')).toBe('!hello');
            expect(capitalize('123abc')).toBe('123abc');
        });
    });

    // Additional test cases
    describe('Additional test cases', () => {
        // Boundary test case
        test('should handle a string with only one character', () => {
            expect(capitalize('a')).toBe('A');
        });

        // Edge case
        test('should handle a string with leading and trailing spaces', () => {
            expect(capitalize('  test  ')).toBe('  test  ');
        });

        // Positive test case
        test('should handle a string with mixed case characters', () => {
            expect(capitalize('MiXeD')).toBe('Mixed');
        });
    });

    // Negative test cases
    describe('Negative test cases', () => {
        test('should not change a string that is already capitalized correctly', () => {
            expect(capitalize('Fred')).toBe('Fred');
        });

        test('should not capitalize a string with all lowercase letters incorrectly', () => {
            expect(capitalize('fred')).not.toBe('FRED');
        });

        test('should not capitalize a string with all uppercase letters incorrectly', () => {
            expect(capitalize('FRED')).not.toBe('FRED');
        });
    });
});