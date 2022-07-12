const memo: number[] = [];

function fibMem(n: number, memo: number[]): number {
  if (n === 0) return 0;
  if (n < 2) return 1;
  if (memo[n] > 0) return memo[n];
  memo[n] = fibMem(n - 1, memo) + fibMem(n - 2, memo);
  return memo[n];
}

export function fib(n: number): number {
  return fibMem(n, memo);
}

console.log(fib(10), 55);
