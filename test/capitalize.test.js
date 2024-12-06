jest.mock('../src/toString.js', () => {
    return jest.fn((input) => {
        if (input === null || input === undefined) return '';
        return String(input);
    });
});

import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
    test('should capitalize the first character and lowercase the rest', () => {
        expect(capitalize('FRED')).toBe('Fred');
        expect(capitalize('hello')).toBe('Hello');
    });

    test('should handle an already capitalized string', () => {
        expect(capitalize('Fred')).toBe('Fred');
    });

    test('should return an empty string if input is empty', () => {
        expect(capitalize('')).toBe('');
    });

    test('should handle non-string inputs gracefully', () => {
        expect(capitalize(123)).toBe('123');
        expect(capitalize(null)).toBe(''); // Simulated behavior
        expect(capitalize(undefined)).toBe(''); // Simulated behavior
    });

    test('should handle strings with special characters', () => {
        expect(capitalize('!hello')).toBe('!hello');
        expect(capitalize('123abc')).toBe('123abc');
    });

    // Additional Test Cases from the Good Test File
    test('should handle a string with only one character', () => {
        expect(capitalize('a')).toBe('A');
    });

    test('should handle a string with leading and trailing spaces', () => {
        expect(capitalize('  test  ')).toBe('  test  ');
    });

    test('should handle a string with mixed case characters', () => {
        expect(capitalize('MiXeD')).toBe('Mixed');
    });

    test('should handle a sentence with mixed case words', () => {
        expect(capitalize('the qUick brown fox')).toBe('The quick brown fox');
    });
});