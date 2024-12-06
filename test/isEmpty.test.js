import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
    test('should return true for null and undefined', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
    });

    test('should return true for empty arrays', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('should return false for non-empty arrays', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('should return true for empty strings', () => {
        expect(isEmpty('')).toBe(true);
    });

    test('should return false for non-empty strings', () => {
        expect(isEmpty('hello')).toBe(false);
    });

    test('should return true for empty objects', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('should return false for non-empty objects', () => {
        expect(isEmpty({ key: 'value' })).toBe(false);
    });

    test('should return true for numbers and booleans', () => {
        expect(isEmpty(0)).toBe(true); // 0 is treated as empty
        expect(isEmpty(false)).toBe(true); // false is treated as empty
        expect(isEmpty(1)).toBe(true); // 1 is treated as empty, based on function behavior
    });

    test('should return true for functions', () => {
        expect(isEmpty(() => {})).toBe(true); // Functions are treated as empty
    });

    test('should return true for symbols', () => {
        expect(isEmpty(Symbol('test'))).toBe(true); // Symbols are treated as empty
    });

    test('should return true for empty Map', () => {
        const emptyMap = new Map();
        expect(isEmpty(emptyMap)).toBe(true);
    });

    test('should return false for non-empty Map', () => {
        const nonEmptyMap = new Map();
        nonEmptyMap.set('key', 'value');
        expect(isEmpty(nonEmptyMap)).toBe(false);
    });

    test('should return true for empty Set', () => {
        const emptySet = new Set();
        expect(isEmpty(emptySet)).toBe(true);
    });

    test('should return false for non-empty Set', () => {
        const nonEmptySet = new Set([1, 2, 3]);
        expect(isEmpty(nonEmptySet)).toBe(false);
    });

    test('should return true for object with no own properties (prototype-based)', () => {
        function MyConstructor() {}
        MyConstructor.prototype.prop = 'value';
        const obj = new MyConstructor();
        expect(isEmpty(obj)).toBe(true); // No own properties, but prototype exists
    });

    test('should return false for object with own properties', () => {
        const obj = { ownProp: 'value' };
        expect(isEmpty(obj)).toBe(false); // Object with own properties
    });

    test('should return false for non-empty arguments object', () => {
        function example() {
            return isEmpty(arguments);
        }
        expect(example(1, 2, 3)).toBe(false); // Arguments object is non-empty
    });

    test('should return true for empty arguments object', () => {
        function example() {
            return isEmpty(arguments);
        }
        expect(example()).toBe(true); // Empty arguments object
    });

    test('should return true for empty typed arrays', () => {
        const emptyTypedArray = new Int8Array();
        expect(isEmpty(emptyTypedArray)).toBe(true);
    });

    test('should return false for non-empty typed arrays', () => {
        const nonEmptyTypedArray = new Int8Array([1]);
        expect(isEmpty(nonEmptyTypedArray)).toBe(false);
    });

    test('should return true for an empty Buffer', () => {
        expect(isEmpty(Buffer.from(''))).toBe(true);
    });

    test('should return true for an empty prototype object', () => {
        expect(isEmpty(Object.create(null))).toBe(true);
    });
});