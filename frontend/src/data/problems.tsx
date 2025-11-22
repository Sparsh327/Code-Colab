// ------------------------
// Types
// ------------------------
export type Difficulty = "easy" | "medium" | "hard";

export interface ProblemExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface StarterCode {
  javascript: string;
  python: string;
  java: string;
}

export interface ExpectedOutput {
  javascript: string;
  python: string;
  java: string;
}

export interface ProblemDescription {
  text: string;
  notes: string[];
}

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  category: string;
  description: ProblemDescription;
  examples: ProblemExample[];
  constraints: string[];
  starterCode: StarterCode;
  expectedOutput: ExpectedOutput;
}

export type ProblemMap = Record<string, Problem>;

// ------------------------
// PROBLEMS OBJECT
// ------------------------
export const PROBLEMS: ProblemMap = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers that add up to the target.",
      notes: [
        "Each input has exactly one solution",
        "You may not reuse the same element twice",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "2 + 7 = 9",
      },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {}`,
      python: `def twoSum(nums, target): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0,1]\n[1,2]\n[0,1]",
      java: "[0,1]\n[1,2]\n[0,1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "easy",
    category: "String • Two Pointers",
    description: {
      text: "Reverse the array of characters in-place.",
      notes: ["Must use O(1) extra memory."],
    },
    examples: [
      { input: '["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      {
        input: '["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵"],
    starterCode: {
      javascript: `function reverseString(s) {}`,
      python: `def reverseString(s): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]',
      python: '["o","l","l","e","h"]',
      java: "[o, l, l, e, h]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "easy",
    category: "String • Two Pointers",
    description: {
      text: "Check if a string is a palindrome ignoring non-alphanumeric characters.",
      notes: [],
    },
    examples: [
      { input: '"A man, a plan, a canal: Panama"', output: "true" },
      { input: '"race a car"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 2 × 10⁵"],
    starterCode: {
      javascript: `function isPalindrome(s) {}`,
      python: `def isPalindrome(s): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "medium",
    category: "Array • DP",
    description: {
      text: "Find contiguous subarray with maximum sum.",
      notes: [],
    },
    examples: [{ input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" }],
    constraints: ["1 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function maxSubArray(nums) {}`,
      python: `def maxSubArray(nums): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {
      javascript: "6",
      python: "6",
      java: "6",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "medium",
    category: "Array • Two Pointers",
    description: {
      text: "Find two lines that form the container holding the most water.",
      notes: [],
    },
    examples: [
      { input: "[1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "[1,1]", output: "1" },
    ],
    constraints: ["2 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function maxArea(height) {}`,
      python: `def maxArea(height): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },
};

// ------------------------
// PROBLEM ITEMS (used in dropdown)
// ------------------------
export const problemItems = Object.values(PROBLEMS).map((p) => ({
  title: p.title,
  difficulty: p.difficulty,
  id: p.id,
}));
