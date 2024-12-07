import filter from '../src/filter.js';

describe('filter', () => {
    const dataset = [1, 2, 3, 4, 5];

    // Basic functionality tests
    // Positive test case
    test('should filter items based on a condition', () => {
        const isEven = (n) => n % 2 === 0;
        expect(filter(dataset, isEven)).toEqual([2, 4]);
    });

    // Negative test case
    test('should return an empty array if no items match the condition', () => {
        const isGreaterThanTen = (n) => n > 10;
        expect(filter(dataset, isGreaterThanTen)).toEqual([
            []
        ]);
    });

    // Positive test case
    test('should handle a condition that matches all elements', () => {
        const isNumber = (value) => typeof value === 'number';
        expect(filter(dataset, isNumber)).toEqual([1, 2, 3, 4, 5]);
    });

    // Positive test case
    test('should handle a condition that matches some elements', () => {
        const isOdd = (n) => n % 2 !== 0;
        expect(filter(dataset, isOdd)).toEqual([1, 3, 5]);
    });

    // Edge case test
    test('should handle an empty array', () => {
        expect(filter([], (n) => n > 0)).toEqual([
            []
        ]);
    });

    // Negative test case
    test('should handle invalid or missing callback', () => {
        expect(() => filter(dataset, null)).toThrow();
        expect(() => filter(dataset, undefined)).toThrow();
    });

    // Edge case test
    test('should handle null or undefined array input', () => {
        const isEven = (n) => n % 2 === 0;
        expect(filter(null, isEven)).toEqual([
            []
        ]);
        expect(filter(undefined, isEven)).toEqual([
            []
        ]);
    });

    // Edge case test
    test('should handle non-array inputs gracefully', () => {
        const isEven = (n) => n % 2 === 0;
        expect(filter(12345, isEven)).toEqual([
            []
        ]);
        expect(filter('string', isEven)).toEqual([
            []
        ]);
        expect(filter({ key: 'value' }, isEven)).toEqual([
            []
        ]);
    });

    // Complex data structure tests
    // Positive test case
    test('should handle complex objects with nested properties', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: false },
            { user: 'wilma', active: true },
        ];
        const isActive = ({ active }) => active;
        expect(filter(users, isActive)).toEqual([
            { user: 'barney', active: true },
            { user: 'wilma', active: true },
        ]);
    });

    // Positive test case
    test('should handle array with mixed types', () => {
        const mixed = [1, 'b', true, null, undefined, {},
            [], NaN
        ];
        const isString = (value) => typeof value === 'string';
        expect(filter(mixed, isString)).toEqual(['b']);
    });

    // Positive test case
    test('should handle array with nested arrays', () => {
        const nested = [5, [1, 2], 8, [3, 4]];
        const isArray = (value) => Array.isArray(value);
        expect(filter(nested, isArray)).toEqual([
            [1, 2],
            [3, 4]
        ]);
    });

    // Positive test case
    test('should handle array with objects', () => {
        const objects = [{ id: 1 }, { id: 2 }, 3, 4];
        const isObject = (value) => typeof value === 'object' && !Array.isArray(value);
        expect(filter(objects, isObject)).toEqual([{ id: 1 }, { id: 2 }]);
    });

    // Positive test case
    test('should handle array with functions', () => {
        const functions = [() => 'a', () => 'b', 1, 2];
        const isFunction = (value) => typeof value === 'function';
        expect(filter(functions, isFunction)).toEqual([functions[0], functions[1]]);
    });

    // Additional functionality tests
    // Positive test case
    test('should pass index to predicate', () => {
        const arr = ['x', 'y', 'z'];
        const result = filter(arr, (value, index) => index % 2 === 0);
        expect(result).toEqual(['x', 'z']);
    });

    // Boundary test case
    test('should preserve the original array and not mutate it', () => {
        const isEven = (n) => n % 2 === 0;
        const originalDataset = [...dataset];
        filter(dataset, isEven);
        expect(dataset).toEqual(originalDataset);
    });
});