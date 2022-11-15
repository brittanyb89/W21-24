/**
 * HINTS:
 * If it's a 'default' export, no need to use curly braces.
 */
// can import any name you want
import mickeyMouse from "./services/api.service";

console.log(mickeyMouse.sayHello());

document.querySelectorAll("button").forEach((button) => {
  button.classList.add("button");
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = event.target.username.value;
});
