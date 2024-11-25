import { moveZerosToEnd } from './moveZerosToEnd'

describe('Invalid input types to throw error', () => {
    test('undefined input', () => {
        // @ts-expect-error
        expect(() => moveZerosToEnd(undefined)).toThrow()
    })

    test('string input', () => {
        // @ts-expect-error
        expect(() => moveZerosToEnd('01010122')).toThrow()
    })

    test('number input', () => {
        // @ts-expect-error
        expect(() => moveZerosToEnd(1234)).toThrow()
    })
})

describe('Empty array', () => {
    test('empty array', () => {
        expect(moveZerosToEnd([])).toEqual([])
    })
})

describe('1 Element', () => {
    test('Non zero', () => {
        expect(moveZerosToEnd([10])).toEqual([10])
    })

    test('Zero', () => {
        expect(moveZerosToEnd([0])).toEqual([0])
    })
})

describe('2 Elements', () => {
    test('No zeros', () => {
        expect(moveZerosToEnd([10, 20])).toEqual([10, 20])
    })

    test('Trailing zero', () => {
        expect(moveZerosToEnd([10, 0])).toEqual([10, 0])
    })

    test('Leading zero', () => {
        expect(moveZerosToEnd([0, 10])).toEqual([10, 0])
    })
})
describe('3 Elements', () => {
    test('No zeros', () => {
        expect(moveZerosToEnd([10, 20, 30])).toEqual([10, 20, 30])
    })

    test('1 trailing zero', () => {
        expect(moveZerosToEnd([10, 20, 0])).toEqual([10, 20, 0])
    })

    test('1 leading zero', () => {
        expect(moveZerosToEnd([0, 10, 20])).toEqual([10, 20, 0])
    })

    test('1 middle zero', () => {
        expect(moveZerosToEnd([10, 0, 20])).toEqual([10, 20, 0])
    })

    test('2 leading zeros', () => {
        expect(moveZerosToEnd([0, 0, 10])).toEqual([10, 0, 0])
    })

    test('2 trailing zeros', () => {
        expect(moveZerosToEnd([10, 0, 0])).toEqual([10, 0, 0])
    })

    test('2 zeros - leading and trailing zero', () => {
        expect(moveZerosToEnd([0, 10, 0])).toEqual([10, 0, 0])
    })

    test('3 zeros', () => {
        expect(moveZerosToEnd([0, 0, 0])).toEqual([0, 0, 0])
    })
})

describe('10 Elements', () => {
    test('10 elements - zeros separating each element', () => {
        expect(moveZerosToEnd([10, 0, 20, 0, 30, 0, 40, 0, 50, 0])).toEqual([
            10, 20, 30, 40, 50, 0, 0, 0, 0, 0,
        ])
    })

    test('10 elements - 3 leading zeros, 2 trailing zeros', () => {
        expect(moveZerosToEnd([0, 0, 0, 10, 20, 30, 40, 50, 0, 0])).toEqual([
            10, 20, 30, 40, 50, 0, 0, 0, 0, 0,
        ])
    })
})
