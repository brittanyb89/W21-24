/**
 * HINTS:
 * If it's a 'default' export, no need to use curly braces.
 */
// can import any name you want
import apiService from "./services/api.service";

document.querySelectorAll("button").forEach((button) => {
  button.classList.add("button");
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = event.target.username.value;

  const data = await apiService.getReposByUsername(username);

  console.log(data);
});

document.getElementById("topics").addEventListener("click", async (event) => {
  // with event bubbling we can listen to the parent element and get the target element from the event Object. Let's make sure we only listen to the buttons.
  if (event.target.tagName === "BUTTON") {
    const topic = event.target.innerText.toLowerCase(); // textContent and innerText are used interchangeably.
    const data = await apiService.getReposByUsername(topic);
  }
});
