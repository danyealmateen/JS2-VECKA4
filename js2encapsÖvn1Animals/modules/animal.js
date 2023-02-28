class Animal {
  #name;
  #type;
  #color;
  constructor(name, type, color) {
    this.#name = name;
    this.#type = type;
    this.#color = color;
  }
  getName() {
    return this.#name;
  }
  getType() {
    return this.#type;
  }
  getColor() {
    return this.#color;
  }
  setName(newName) {
    this.#name = newName;
  }
  setType(newType) {
    this.#type = newType;
  }
  setColor(newColor) {
    this.#color = newColor;
  }
}

const a = new Animal("Koala", "Nappy Bear", "Gray");

a.setName("Batman");
console.log(a.getName());

a.setType("Sleepy Bear");
console.log(a.getType());

a.setColor("Green");
console.log(a.getColor());

export { Animal };
