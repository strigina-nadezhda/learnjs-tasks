// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}
