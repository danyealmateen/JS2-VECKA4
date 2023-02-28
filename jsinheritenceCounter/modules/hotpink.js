import { Counter } from "./counter.js";

class PinkCounter extends Counter {
  constructor(maxCount, element) {
    super(maxCount, element);
    this.element.style.backGround = "hotpink";
  }
}

export { PinkCounter };
