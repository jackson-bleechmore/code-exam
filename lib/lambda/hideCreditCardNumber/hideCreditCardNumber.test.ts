import { hideCreditCardNumber } from './hideCreditCardNumber'

const creditCardPrefix = '************'

test('prefix used in test validation of length of 12', () => {
    expect(creditCardPrefix.length).toBe(12)
})

describe('Invalid input types', () => {
    test('undefined to throw error', () => {
        // @ts-expect-error
        expect(() => hideCreditCardNumber(undefined)).toThrow()
    })

    test('array of chars to throw error', () => {
        expect(() =>
            // @ts-expect-error
            hideCreditCardNumber([
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
            ])
        ).toThrow()
    })

    test('array of numbers to throw error', () => {
        expect(() =>
            // @ts-expect-error
            hideCreditCardNumber([
                1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6,
            ])
        ).toThrow()
    })
})

describe('Inputs not equal to 16 characters are returned as output', () => {
    test('emptry string', () => {
        const input_str = ''
        expect(hideCreditCardNumber(input_str)).toBe(input_str)
        expect(input_str.length).toBe(0)
    })

    test('12 character string', () => {
        const input_str = '123412341234'
        expect(hideCreditCardNumber(input_str)).toBe(input_str)
        expect(input_str.length).toBe(12)
    })

    test('20 character string', () => {
        const input = '1a2b3c4e5%6^7&8*9(0)'
        expect(hideCreditCardNumber(input)).toBe(input)
        expect(input.length).toBe(20)
    })
})

describe('Inputs of 16 characters return return only last 4 characters prefixed with asterisks', () => {
    test('16 character string of numbers', () => {
        expect(hideCreditCardNumber('1234123412341234')).toBe(
            creditCardPrefix + '1234'
        )
    })

    test('16 character string of letters, numbers, symbols', () => {
        const first12Chars = '1a2b3c4e5%6^'
        const last4Chars = '7&8*'
        expect(hideCreditCardNumber(first12Chars + last4Chars)).toBe(
            creditCardPrefix + last4Chars
        )
    })
})
