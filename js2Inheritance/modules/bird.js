import { Animal } from "./animal.js";

export class Bird extends Animal {
  #wingspan;
  constructor(type, sound, wingspan) {
    //Super anropar constructorn i den originala
    super(type, sound);
    this.#wingspan = wingspan;

    console.log(this.getType());
  }
  fly() {
    console.log("flying with a wingspan of", this.#wingspan);
  }
}
