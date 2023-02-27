// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`используйте натуральное число`);
} else {
  alert(pow(x, n));
}

function pow(x, n) {
  let res = x;

  for (let i = 1; i < n; i++) {
    res *= x;
  }

  return res;
}
