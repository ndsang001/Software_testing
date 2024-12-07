import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
    describe('Null and Undefined', () => {
        test('should return true for null and undefined', () => { // Edge case
            expect(isEmpty(null)).toBe(true);
            expect(isEmpty(undefined)).toBe(true);
        });
    });

    describe('Arrays', () => {
        test('should return true for empty arrays', () => { // Positive case
            expect(isEmpty([])).toBe(true);
        });

        test('should return false for non-empty arrays', () => { // Negative case
            expect(isEmpty([1, 2, 3])).toBe(false);
        });
    });

    describe('Strings', () => {
        test('should return true for empty strings', () => { // Positive case
            expect(isEmpty('')).toBe(true);
        });

        test('should return false for non-empty strings', () => { // Negative case
            expect(isEmpty('hello')).toBe(false);
        });
    });

    describe('Objects', () => {
        test('should return true for empty objects', () => { // Positive case
            expect(isEmpty({})).toBe(true);
        });

        test('should return false for non-empty objects', () => { // Negative case
            expect(isEmpty({ key: 'value' })).toBe(false);
        });

        test('should return true for object with no own properties (prototype-based)', () => { // Edge case
            function MyConstructor() {}
            MyConstructor.prototype.prop = 'value';
            const obj = new MyConstructor();
            expect(isEmpty(obj)).toBe(true); // No own properties, but prototype exists
        });

        test('should return true for an empty prototype object', () => { // Edge case
            expect(isEmpty(Object.create(null))).toBe(true);
        });
    });

    describe('Maps', () => {
        test('should return true for empty Map', () => { // Positive case
            const emptyMap = new Map();
            expect(isEmpty(emptyMap)).toBe(true);
        });

        test('should return false for non-empty Map', () => { // Negative case
            const nonEmptyMap = new Map();
            nonEmptyMap.set('key', 'value');
            expect(isEmpty(nonEmptyMap)).toBe(false);
        });
    });

    describe('Sets', () => {
        test('should return true for empty Set', () => { // Positive case
            const emptySet = new Set();
            expect(isEmpty(emptySet)).toBe(true);
        });

        test('should return false for non-empty Set', () => { // Negative case
            const nonEmptySet = new Set([1, 2, 3]);
            expect(isEmpty(nonEmptySet)).toBe(false);
        });
    });

    describe('Arguments Object', () => {
        test('should return false for non-empty arguments object', () => { // Negative case
            function example() {
                return isEmpty(arguments);
            }
            expect(example(1, 2, 3)).toBe(false); // Arguments object is non-empty
        });

        test('should return true for empty arguments object', () => { // Positive case
            function example() {
                return isEmpty(arguments);
            }
            expect(example()).toBe(true); // Empty arguments object
        });
    });

    describe('Typed Arrays', () => {
        test('should return true for empty typed arrays', () => { // Positive case
            const emptyTypedArray = new Int8Array();
            expect(isEmpty(emptyTypedArray)).toBe(true);
        });

        test('should return false for non-empty typed arrays', () => { // Negative case
            const nonEmptyTypedArray = new Int8Array([1]);
            expect(isEmpty(nonEmptyTypedArray)).toBe(false);
        });
    });

    describe('Buffers', () => {
        test('should return true for an empty Buffer', () => { // Positive case
            expect(isEmpty(Buffer.from(''))).toBe(true);
        });
    });
});