import map from '../src/map.js';

describe('map', () => {
  // Test case 1: Apply a callback to each element
  test('should apply the callback function to each element', () => {
    const square = (n) => n * n;
    expect(map([1, 2, 3, 4, 5], square)).toEqual([1, 4, 9, 16, 25]);
  });

  // Test case 2: Return an empty array when input is empty
  test('should return an empty array when input is empty', () => {
    const square = (n) => n * n;
    expect(map([], square)).toEqual([]);
  });

  // Test case 3: Handle null input gracefully
  test('should return an empty array when input is null', () => {
    const square = (n) => n * n;
    expect(map(null, square)).toEqual([]);
  });

  // Test case 4: Handle undefined input gracefully
  test('should return an empty array when input is undefined', () => {
    const square = (n) => n * n;
    expect(map(undefined, square)).toEqual([]);
  });

  // Test case 5: Handle sparse arrays correctly
  test('should handle sparse arrays', () => {
    const array = [1, , 3]; // Sparse array
    const double = (n) => (n === undefined ? 'undefined' : n * 2);
    expect(map(array, double)).toEqual([2, 'undefined', 6]);
  });

  // Test case 6: Invalid callback function
  test('should throw an error for invalid callback', () => {
    expect(() => map([1, 2, 3], null)).toThrow();
    expect(() => map([1, 2, 3], undefined)).toThrow();
    expect(() => map([1, 2, 3], 42)).toThrow();
  });

  // Test case 7: Callback function with index and array
  test('should pass index and array to callback', () => {
    const callback = jest.fn((value, index, array) => `${value}-${index}-${array.length}`);
    const result = map([10, 20, 30], callback);

    expect(result).toEqual(['10-0-3', '20-1-3', '30-2-3']);
    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenCalledWith(10, 0, [10, 20, 30]);
    expect(callback).toHaveBeenCalledWith(20, 1, [10, 20, 30]);
    expect(callback).toHaveBeenCalledWith(30, 2, [10, 20, 30]);
  });
});
