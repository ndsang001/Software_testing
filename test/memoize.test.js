import memoize from '../src/memoize.js';

describe('memoize', () => {
    test('should cache results of a function', () => {
        const mockFn = jest.fn((x) => x * 2);
        const memoizedFn = memoize(mockFn);

        expect(memoizedFn(2)).toBe(4); // First call, not cached
        expect(memoizedFn(2)).toBe(4); // Cached
        expect(mockFn).toHaveBeenCalledTimes(1); // Called only once

        expect(memoizedFn(3)).toBe(6); // First call for a new input
        expect(memoizedFn(3)).toBe(6); // Cached
        expect(mockFn).toHaveBeenCalledTimes(2); // Called again for a new input
    });

    test('should allow clearing the cache', () => {
        const mockFn = jest.fn((x) => x * 2);
        const memoizedFn = memoize(mockFn);

        memoizedFn(2);
        memoizedFn.cache.clear(); // Clear the cache
        memoizedFn(2);

        expect(mockFn).toHaveBeenCalledTimes(2); // Called twice due to cache clearing
    });

    test('should memoize a function with multiple arguments', () => {
        let callCount = 0;

        const originalFunction = (a, b) => {
            callCount++;
            return a + b;
        };

        const memoizedFunction = memoize(originalFunction);

        // First call
        const result1 = memoizedFunction(2, 3);
        expect(result1).toBe(5);
        expect(callCount).toBe(1);

        // Second call with the same arguments
        const result2 = memoizedFunction(2, 3);
        expect(result2).toBe(5);
        expect(callCount).toBe(1); // Should not increment callCount

        // Third call with different arguments
        const result3 = memoizedFunction(4, 5);
        expect(result3).toBe(9);
        expect(callCount).toBe(2); // Should increment callCount
    });

    test('should support a custom resolver function', () => {
        const resolver = (a, b) => a + '-' + b;

        let callCount = 0;
        const originalFunction = (a, b) => {
            callCount++;
            return a + b;
        };

        const memoizedFunction = memoize(originalFunction, resolver);

        // First call
        const result1 = memoizedFunction(2, 3);
        expect(result1).toBe(5);
        expect(callCount).toBe(1);

        // Second call with the same resolved key
        const result2 = memoizedFunction(2, 3);
        expect(result2).toBe(5);
        expect(callCount).toBe(1);

        // Third call with different resolved key
        const result3 = memoizedFunction(4, 5);
        expect(result3).toBe(9);
        expect(callCount).toBe(2);
    });

    test('should throw an error for invalid input', () => {
        const invalidInputs = [null, undefined, 42, 'string', {}, []];

        invalidInputs.forEach((invalidInput) => {
            expect(() => memoize(invalidInput)).toThrow(TypeError);
        });
    });

    test('should throw an error if resolver is not a function', () => {
        const mockFn = jest.fn((x) => x * 2);
        const invalidResolvers = [42, 'string', {}, []];

        invalidResolvers.forEach((resolver) => {
            expect(() => memoize(mockFn, resolver)).toThrow(TypeError);
        });
    });

    test('should handle custom cache object', () => {
        const mockFn = jest.fn((x) => x * 2);
        const customCache = new Map();
        const memoizedFn = memoize(mockFn);
        memoizedFn.cache = customCache;

        // Populate custom cache
        memoizedFn(2);
        expect(customCache.has(2)).toBe(true);
        expect(customCache.get(2)).toBe(4);

        // Retrieve value from custom cache
        expect(memoizedFn(2)).toBe(4);
        expect(mockFn).toHaveBeenCalledTimes(1); // Cache hit, no new call
    });
});
