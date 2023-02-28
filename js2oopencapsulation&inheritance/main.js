class Animal {
  #type;
  #sound;
  constructor(type, sound) {
    this.#type = type;
    this.#sound = sound;
  }
  getSound() {
    return this.#sound;
  }
  setSound(newSound) {
    console.log(typeof newSound);

    if (typeof newSound != "number") {
      this.#sound = newSound;
    }
  }
}

const snake = new Animal("snake", "tssss");
console.log(snake);

//funkar ej
// console.log(snake.#type);
// console.log(snake.type);
// snake.getSound() = "gaah"
snake.setSound(123135135135);

console.log(snake.getSound());
