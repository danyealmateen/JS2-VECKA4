import { Vehicles } from "./vehicles.js";

class Car extends Vehicles {
  #fuelType;
  #manual;
  #numberOfDoors;

  constructor(fuelType, manual, numberOfDoors) {

    super(make, model, year, maxSpeed, currentSpeed);

    this.#fuelType = fuelType;
    this.#manual = false;
    this.#numberOfDoors = numberOfDoors;
    
  }
  lock() {
    console.log();
  }
  unlock() {
    console.log();
  }
}
export { Newcar };
