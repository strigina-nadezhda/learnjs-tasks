// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
