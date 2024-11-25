/*
   Question 1:  Two sum Two


    Array of values  = [2,11,7,15]

    Target = 18


    Instructions
    Look for the two numbers that sum up to the target. Move the numbers in the Array  

*/

export function twoSumTwo(nums: number[], target: number): number[] {
    const complement_index_map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        const complement_index = complement_index_map.get(complement)
        if (complement_index !== undefined) {
            return [complement_index, i]
        }

        complement_index_map.set(nums[i], i)
    }

    return []
}
