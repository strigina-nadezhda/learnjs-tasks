// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
