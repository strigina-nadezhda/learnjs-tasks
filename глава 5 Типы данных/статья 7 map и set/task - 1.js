// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
  return Array.from(new Set(arr));
}
