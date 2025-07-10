let name = 'Zubair';
function greet(name) {
  console.log("Hello " + name);
}

function add(a, b) {
  return a + b;
}

function checkValue(val) {
  if (val === 'test') {
    console.log('value is test');
  } else {
    console.log('value is not test');
  }
}

const unused = 42;

greet(name);
console.log(add(5, 10));
checkValue("test");
