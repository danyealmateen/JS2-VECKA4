class Counter {
  #maxCount;
  #currentCount;
  #id;
  #element;

  constructor(maxCount, element) {
    this.#maxCount = maxCount;
    this.#element = element;
    this.#currentCount = 0;
  }

  start() {
    this.update();

    this.#id = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.#id);
  }

  update() {
    this.#currentCount++;
    this.#element.innerText = this.#currentCount;
    console.log(this.#currentCount);

    if (this.#currentCount >= this.#maxCount) {
      this.stop();
    }
  }
}

const counter = new Counter(10);
counter.start();

export { Counter };
