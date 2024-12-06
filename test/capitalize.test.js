jest.mock('../src/toString.js', () => {
    return jest.fn((input) => {
        if (input === null || input === undefined) return '';
        return String(input);
    });
});

import capitalize from '../src/capitalize.js';
import toString from '../src/toString.js'; // Import the mocked module

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
});
