const memo: number[] = [];

function fibMem(n: number) {
  if (n === 0) return 0;
  if (n < 2) return 1;
  if (memo[n] > 0) return memo[n];
  memo[n] = fibMem(n - 1) + fibMem(n - 2);
  return memo[n];
}

export function fib(n: number) {
  return fibMem(n);
}

console.log(fib(8), 55);
