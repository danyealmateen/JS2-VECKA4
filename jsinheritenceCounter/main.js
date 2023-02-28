import { Counter } from "./modules/counter.js";
import { PinkCounter } from "./modules/hotpink.js";

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();

  const maxCount = document.querySelector("input").value;
  const h1 = document.createElement("h1");
  h1.innerText = 0;
  document.querySelector("#container").append(h1);

  const counter = new PinkCounter(maxCount, h1);

  h1.addEventListener("click", () => {
    counter.start();
  });
});
