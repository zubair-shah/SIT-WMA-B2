function sayHello(name) {
  if (name) {
    console.log("Hello, " + name + "!");
  } else {
    console.log("Hello, stranger!");
  }
}
const add = (a, b) => {
  return a + b;
};
let result = add(5, 7);
sayHello("Zubair");
sayHello();
console.log("Sum is: " + result);
