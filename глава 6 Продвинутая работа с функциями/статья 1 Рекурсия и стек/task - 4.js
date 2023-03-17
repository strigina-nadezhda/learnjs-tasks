// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

function printList(list) {
  let elem = list;
  while (elem) {
    console.log(elem.value);
    elem = elem.next;
  }
}

function printList1(list) {
  console.log(list.value);
  return list.next ? printList(list.next) : list.value;
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

console.log(printList(list));
console.log(printList1(list));
