import {businessesDOM} from "./foreach.js";

let clicker = document.querySelector('.btn');

clicker.addEventListener("click", () => {
  clicker.textContent = 'Get NY Businesses Only';
  clicker.classList.add("btn-ny");
  businessesDOM();
  removeClass("btn");
});

