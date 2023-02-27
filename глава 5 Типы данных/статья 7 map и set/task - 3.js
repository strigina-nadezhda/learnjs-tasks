// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); //  <<<<-----

keys.push("more");

console.log(keys);
