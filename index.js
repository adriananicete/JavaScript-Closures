function outer() {
let count = 0;
  const x = 10;
  console.log("Outer");
  return function inner() {
    console.log("Inner");
    console.log(x);
  };
}

const inner = outer();
inner();

function outerCounter() {
  let count = 0;

  return function innerCount() {
    count++;
    console.log(count);
  };
}

const retVal = outerCounter();
retVal();
retVal();
retVal();
retVal();

