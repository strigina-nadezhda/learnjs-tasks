// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Сделайте три варианта решения:

// 1. С использованием цикла.

function sumTo(n) {
  let sum = 0;
  while (n >= 1) {
    sum += n;
    n--;
  }
  return sum;
}

// 2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

function sumTo1(n) {
  return n > 1 ? n + sumTo(n - 1) : 1;
}

// 3. С использованием формулы арифметической прогрессии.

function sumTo2(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo2(100));
