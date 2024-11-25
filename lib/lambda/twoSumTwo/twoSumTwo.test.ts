import { twoSumTwo } from "./twoSumTwo";

describe("Invalid and empty input", () => {
  test("undefined input array", () => {
    // @ts-expect-error
    expect(() => twoSumTwo(undefined, 1)).toThrow();
  });

  test("undefined input target", () => {
    // @ts-expect-error
    expect(twoSumTwo([1, 2, 3, 4], undefined)).toEqual([]);
  });

  test("empy array input", () => {
    expect(twoSumTwo([], 1)).toEqual([]);
  });
});

describe("1 Element ", () => {
  test("1 element equal to target", () => {
    expect(twoSumTwo([10], 10)).toEqual([]);
  });

  test("1 element not equal to target", () => {
    expect(twoSumTwo([10], 20)).toEqual([]);
  });
});

describe("2 Elements ", () => {
  test("Sum to target", () => {
    expect(twoSumTwo([10, 20], 30)).toEqual([0, 1]);
  });

  test("Not sum to target", () => {
    expect(twoSumTwo([10, 20], 50)).toEqual([]);
  });

  test("Both 0, target 0", () => {
    expect(twoSumTwo([0, 0], 0)).toEqual([0, 1]);
  });

  test("Both 0, no solution", () => {
    expect(twoSumTwo([0, 0], 20)).toEqual([]);
  });
});

describe("3 Elements ", () => {
  test("First 2 indexes sum to target", () => {
    expect(twoSumTwo([10, 20, 30], 30)).toEqual([0, 1]);
  });

  test("Last 2 indexes sum to target", () => {
    expect(twoSumTwo([10, 20, 30], 50)).toEqual([1, 2]);
  });

  test("First and last indexes sum to target", () => {
    expect(twoSumTwo([10, 20, 30], 40)).toEqual([0, 2]);
  });

  test("No solution", () => {
    expect(twoSumTwo([10, 20, 30], 0)).toEqual([]);
  });
});

describe("4 Elements ", () => {
  test("Middle 2 indexes sum to target", () => {
    expect(twoSumTwo([10, 20, 30, 50], 50)).toEqual([1, 2]);
  });

  test("Multiple solutions", () => {
    expect(twoSumTwo([10, 20, 30, 40], 50)).toEqual([1, 2]);
  });

  test("All negative values", () => {
    expect(twoSumTwo([-10, -20, -30, -40], -70)).toEqual([2, 3]);
  });
});

describe("Other inputs", () => {
  test("Negative and positive values", () => {
    expect(twoSumTwo([-10, 10, -30, 40], 0)).toEqual([0, 1]);
  });

  test("Large input array 50 elements", () => {
    const nums = [
      -66, 56, -71, -2, 19, 67, 17, 86, -44, -63, -50, -65, -33, 2, 14, 18, -74,
      -81, 31, -31, -90, -21, -61, 57, 39, 11, -96, -63, 93, -14, 43, -98, 16,
      91, 1, -44, -77, 76, 89, -70, 10, 32, 24, 57, -3, 42, 89, 21, -18, 74,
    ];

    const i = 25;
    const j = 36;

    expect(twoSumTwo(nums, nums[i] + nums[j])).toEqual([i, j]);
  });
});
