/*
Question 3: Write a function to move all zeros in the array to the end


Array = [0,1,0,3,12]


Instructions


Move all the zeros to the end of the array while maintaining relative order to the non zero elements
*/

export function moveZerosToEnd(nums: number[]) {
    const filtered_nums = nums.filter((num) => num !== 0)

    const zerosToAdd = nums.length - filtered_nums.length

    const zerosArray = Array(zerosToAdd).fill(0)
    filtered_nums.push(...zerosArray)

    return filtered_nums
}
