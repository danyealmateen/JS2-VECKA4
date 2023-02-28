class Bankaccount {
  #name;
  #balance;
  constructor(name, balance) {
    this.#name = name;
    this.#balance = balance;
  }
  withDraw(amount) {
    this.#balance -= amount;
    return this.#balance;
  }
  depositMoney(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  showBalance() {
    console.log(this.#balance);
  }
  getShowBalance() {
    return this.#balance;
  }
  getName() {
    return this.#name;
  }
  setName(newName) {
    this.#name = newName;
    return this.#name;
  }
}

const a = new Bankaccount("CSN", 200);

a.showBalance();
a.withDraw(50);
a.showBalance();
a.depositMoney(20);
a.showBalance();

console.log(a.getName());
console.log(a.setName("Banan"));

export { Bankaccount };
