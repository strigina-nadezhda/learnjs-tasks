//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
