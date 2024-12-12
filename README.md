# TypeScript Function: Silent Failure on Negative Input

This repository demonstrates a common but subtle error in TypeScript: a function that silently fails when provided with invalid input. The `printNumbers` function is designed to print numbers from 1 to n, but it doesn't handle negative input correctly. Instead of throwing an error or providing feedback, it simply does nothing.

## The Bug

The `bug.ts` file contains the flawed implementation of the `printNumbers` function.  When a negative number is passed as input, the loop condition `i <= n` is never met, resulting in no output. This silent failure can be hard to debug.

## The Solution

The `bugSolution.ts` file provides an improved version that handles negative input more gracefully. It throws an error, providing more helpful information for the user or calling function.

## How to Reproduce

1. Clone the repository.
2. Open the `bug.ts` file.
3. Run the code with both positive and negative inputs using a TypeScript compiler (like `tsc`) and a Node.js runtime.
4. Observe the behavior.  Then compare with the improved solution in `bugSolution.ts`