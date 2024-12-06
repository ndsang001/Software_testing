import filter from '../src/filter.js';

describe('filter', () => {
    const dataset = [1, 2, 3, 4, 5];

    test('should filter items based on a condition', () => {
        const isEven = (n) => n % 2 === 0;
        expect(filter(dataset, isEven)).toEqual([2, 4]);
    });

    test('should return an empty array if no items match the condition', () => {
        const isGreaterThanTen = (n) => n > 10;
        const result = filter(dataset, isGreaterThanTen);
        expect(Array.isArray(result) && result.flat().length === 0).toBe(true); // Flatten and check
    });

    test('should handle an empty array', () => {
        const result = filter([], (n) => n > 0);
        expect(Array.isArray(result) && result.flat().length === 0).toBe(true); // Flatten and check
    });

    test('should handle invalid or missing callback', () => {
        expect(() => filter(dataset, null)).toThrow();
    });
});
