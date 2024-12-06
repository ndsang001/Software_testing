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
});
