// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Function.prototype.defer = function (ms) {
  let func = this;
  return function (...args) {
    setTimeout(() => func.apply(this, args), ms);
  };
};

// check it
function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
