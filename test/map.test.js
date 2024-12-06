import map from '../src/map.js';

describe('map', () => {
    const dataset = [1, 2, 3, 4, 5];

    test('should apply the callback function to each element', () => {
        const square = (n) => n * n;
        expect(map(dataset, square)).toEqual([1, 4, 9, 16, 25]);
    });

    test('should return an empty array when input is empty', () => {
        const square = (n) => n * n;
        expect(map([], square)).toEqual([]);
    });

    test('should handle invalid callback function gracefully', () => {
        expect(() => map(dataset, null)).toThrow();
        expect(() => map(dataset, undefined)).toThrow();
    });

    test('should handle non-numeric transformations', () => {
        const stringify = (n) => `Number: ${n}`;
        expect(map(dataset, stringify)).toEqual([
            'Number: 1',
            'Number: 2',
            'Number: 3',
            'Number: 4',
            'Number: 5',
        ]);
    });
});
