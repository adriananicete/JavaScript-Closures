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

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance = amount + balance;
      console.log(`Deposited: ${amount} Current Balance: ${balance}`);
    },

    withdraw: (amount) => {
      if (amount > balance) {
        console.log("Insufficient Balance");
      } else {
        balance = balance - amount;
        console.log(`Withdrawn: ${amount} Current Balance: ${balance}`);
      }
    },
    checkBalance: () => console.log("Current Balance: ", balance),
  };
}

const adrianAccount = createBankAccount(100);
console.log(adrianAccount);
adrianAccount.deposit(100);
adrianAccount.deposit(100);
adrianAccount.deposit(100);
adrianAccount.withdraw(50);
adrianAccount.withdraw(400);
adrianAccount.checkBalance();
adrianAccount.deposit(2500);

// Usefullness of Closure

// 1. You can keep the variables private withoust exposing them.
// 2. You can stop variable pollution.
// 3. You can create a function factory.
// 4. You can keep the variable alive between multiple calls.


function counter() {
    let count = 0

    return {
        incrementCounter: () => console.log('Increment by 1: ', ++count),
        decrementCounter: () => console.log('Decrement by 1: ', --count),
        reset: () =>  console.log('Back to 0')
    }
    
}

let counterProgram = counter();
counterProgram.incrementCounter()
counterProgram.incrementCounter()
counterProgram.incrementCounter()
counterProgram.incrementCounter()
counterProgram.decrementCounter()
counterProgram.decrementCounter()

counterProgram.decrementCounter()
counterProgram.incrementCounter()
counterProgram.incrementCounter()
counterProgram.incrementCounter()
counterProgram.incrementCounter()
counterProgram.reset()



