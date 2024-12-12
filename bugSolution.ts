function printNumbers(n: number): void {
  if (n < 1) {
    throw new Error("Input must be a positive integer.");
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This will print numbers 1 to 5

try {
  printNumbers(-5);
} catch (error) {
  console.error(error.message); // This will print an error message
}
