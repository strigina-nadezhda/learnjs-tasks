// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
