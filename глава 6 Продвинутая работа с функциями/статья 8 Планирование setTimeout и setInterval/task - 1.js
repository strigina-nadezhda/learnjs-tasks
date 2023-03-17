// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.

function printNumbers(from, to) {
  let num = from;

  let timerId = setInterval(() => {
    console.log(num);
    if (num == to) {
      clearInterval(timerId);
    }
    num++;
  }, 1000);
}

// printNumbers(6, 11);

// Используя рекурсивный setTimeout.

function printNumbersTimeout(from, to) {
  let num = from;
  setTimeout(function print() {
    console.log(num);
    num++;
    if (num <= to) {
      setTimeout(print, 1000);
    }
  }, 1000);
}

printNumbersTimeout(6, 11);
