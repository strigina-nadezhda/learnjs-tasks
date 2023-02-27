// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

function getDateAgo(date, days) {
  let copyDate = new Date(date);

  copyDate.setDate(date.getDate() - days);
  return copyDate.getDate();
}
