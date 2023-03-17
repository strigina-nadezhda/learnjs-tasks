// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fib(n) {
  let first = 1;
  let second = 1;

  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(7));
console.log(fib(77));
