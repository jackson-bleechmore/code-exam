/*
Question 2: Write a function to hide a credit card number


Instructions


A credit card usually contains 16 digits with an (*) arsterisk and keeps its last four digits as is


Return the updated string with the first 12 characters replaced with asterisks (*).
*/

const prefix = '************'

export function hideCreditCardNumber(str: string): string {
    if (typeof str !== 'string') {
        // logger.warn ....
        throw new TypeError('Input is not a string')
    }

    if (str.length !== 16) {
        return str
    }

    return prefix + str.slice(-4)
}
