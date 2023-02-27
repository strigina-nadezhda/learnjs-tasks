// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}
