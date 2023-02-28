class Vehicles {
  #make;
  #model;
  #year;
  #maxSpeed;
  #currentSpeed;

  constructor(make, model, year, maxSpeed, currentSpeed) {
    this.#make = make;
    this.#model = model;
    this.#year = year;
    this.#maxSpeed = maxSpeed;
    this.#currentSpeed = currentSpeed;
  }
  accelerate(newSpeed) {}
  break() {}
}

export { Vehicles };
