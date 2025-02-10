# Subtle Bug: Loose Equality and NaN in JavaScript

This repository demonstrates a common yet easily overlooked bug in JavaScript involving loose equality (==) and the special value NaN (Not a Number).

## The Bug
The provided JavaScript function `foo` is intended to return 0 only when the input `a` is `null`. However, due to the use of loose equality (`==`), it mistakenly returns 0 when `a` is `NaN` as well.

## The Solution
The solution uses strict equality (`===`) to correctly distinguish between `null` and `NaN`, ensuring that the function returns 0 only when `a` is explicitly `null`.

## How to run the code
1. Clone the repository
2. Open the `bug.js` file to see the code with the bug
3. Open the `bugSolution.js` file to see the corrected code
4. Open your console and run the files using Node.js or a browser's developer console. Observe the different output for each version