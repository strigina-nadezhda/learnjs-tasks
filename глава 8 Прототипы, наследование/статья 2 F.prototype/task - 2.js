//Можем ли мы сделать так?
// let obj2 = new obj.constructor();

/// сработает
function Cat(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Cat("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");

// не сработает
function Cat(name) {
  this.name = name;
  alert(name);
}
Cat.prototype = {};

let kitty = new Cat("White Rabbit");

let kitty2 = new kitty.constructor("Black Rabbit");

console.log(kitty2.name); // undefined
