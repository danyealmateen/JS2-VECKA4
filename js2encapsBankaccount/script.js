class Account {
  #name;
  #balance;
  constructor(name, balance) {
    this.#name = name;
    this.#balance = balance;
  }
  showBalance() {
    console.log("Current balance: ", this.#balance);
  }
  deposit(amount) {
    if (typeof amount == "number") {
      this.#balance += Math.abs(amount);
    }
  }
  withdraw(amount) {
    if (typeof amount == "number" && amount <= this.#balance) {
      this.#balance -= Math.abs(amount);
    }
  }
}

const a = new Account("Salary", 1000);
console.log(a);
a.showBalance();
a.deposit(1000);
a.deposit(-2000);
a.deposit("lite text");
a.showBalance();

a.withdraw(5000);
a.showBalance();
