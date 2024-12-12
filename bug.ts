function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This will print numbers 1 to 5
printNumbers(-5); // This will not print anything, as the loop condition is never met.