// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

function printReverseListCircle(list) {
  let arr = [];
  let elem = list;
  while (elem) {
    arr.push(elem.value);
    elem = elem.next;
  }
  for (const value of arr.reverse()) {
    console.log(value);
  }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printReverseList(list);

console.log(printReverseListCircle(list));
