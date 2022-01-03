import "../scss/style.scss";

const menus = document.querySelector(".menu--js");
const nav = document.querySelector(".navigation--js");

menus.addEventListener("click", () => {
  nav.classList.toggle("navigation__open");
  console.log("Klik");
});
//Clock
const clock = document.getElementById("clock");

function updateTime() {
  moment.locale("pl");
  const now = moment();

  const humanReadable = now.format("MMMM Do YYYY, h:mm:ss a");
  clock.textContent = humanReadable;
}
setInterval(updateTime, 1000);
updateTime();

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");
