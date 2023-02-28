import { Vehicles } from "./modules/vehicles.js";

class Bike extends Vehicles {
  #numberOfGears;
  #currentGear;
  constructor(numberOfGears, currentGear) {
    super(make, model, year, maxSpeed, currentSpeed);

    this.#numberOfGears = 6;
    this.#currentGear = currentGear;
  }
  shiftUp() {
    if (this.#currentGear <= 0 && !this.#currentGear >= 6) {
      this.#currentGear++;
    } else {
      console.log("Max gear bro");
    }
  }
  shiftDown() {
    if (this.#currentGear <= 0) {
      console.log("You are in the lowest gear.");
    } else {
      this.#currentGear--;
    }
  }
}
