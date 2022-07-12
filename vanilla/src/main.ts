import "modern-normalize";
import "styles/globals.scss";

const counter = document.querySelector("#counter") as HTMLSpanElement;
let seconds = 0;

export const add = (a: number, b: number): number => a + b;

export const timer = (): void => {
  setInterval(() => {
    seconds += 1;
    if (counter) {
      counter.textContent = seconds.toString();
    }
  }, 1000);
};

timer();
