import { twoSumTwo } from './twoSumTwo'

test('undefined input array', () => {
    // @ts-expect-error
    expect(() => twoSumTwo(undefined, 1)).toThrow()
})

test('undefined input target', () => {
    // @ts-expect-error
    expect(twoSumTwo([1, 2, 3, 4], undefined)).toEqual([])
})

test('empy array input', () => {
    expect(twoSumTwo([], 1)).toEqual([])
})

test('1 element equal to target', () => {
    expect(twoSumTwo([10], 10)).toEqual([])
})

test('1 element not equal to target', () => {
    expect(twoSumTwo([10], 20)).toEqual([])
})

test('2 elements, sum to target', () => {
    expect(twoSumTwo([10, 20], 30)).toEqual([0, 1])
})

test('2 elements, not sum to target', () => {
    expect(twoSumTwo([10, 20], 50)).toEqual([])
})

test('2 elements both 0, target 0', () => {
    expect(twoSumTwo([0, 0], 0)).toEqual([0, 1])
})

test('2 elements both 0, no solution', () => {
    expect(twoSumTwo([0, 0], 20)).toEqual([])
})

test('3 elements - first 2 indexes', () => {
    expect(twoSumTwo([10, 20, 30], 30)).toEqual([0, 1])
})

test('3 elements - last 2 indexes', () => {
    expect(twoSumTwo([10, 20, 30], 50)).toEqual([1, 2])
})

test('3 elements - first and last indexes', () => {
    expect(twoSumTwo([10, 20, 30], 40)).toEqual([0, 2])
})

test('4 elements - middle 2 indexes', () => {
    expect(twoSumTwo([10, 20, 30, 50], 50)).toEqual([1, 2])
})

test('4 elements - multiple solutions', () => {
    expect(twoSumTwo([10, 20, 30, 40], 50)).toEqual([1, 2])
})

test('All negative values', () => {
    expect(twoSumTwo([-10, -20, -30, -40], -70)).toEqual([2, 3])
})

test('Negative and positive values', () => {
    expect(twoSumTwo([-10, 10, -30, 40], 0)).toEqual([0, 1])
})

test('Large input array 50 elements', () => {
    const nums = [
        -66, 56, -71, -2, 19, 67, 17, 86, -44, -63, -50, -65, -33, 2, 14, 18,
        -74, -81, 31, -31, -90, -21, -61, 57, 39, 11, -96, -63, 93, -14, 43,
        -98, 16, 91, 1, -44, -77, 76, 89, -70, 10, 32, 24, 57, -3, 42, 89, 21,
        -18, 74,
    ]

    const i = 25
    const j = 36

    expect(twoSumTwo(nums, nums[i] + nums[j])).toEqual([i, j])
})
