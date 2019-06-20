
import {businessesDOM} from "./foreach.js";
// import {some stupid bullshit} from "./filter.js";
import {agentsDOM} from "./map.js";

let btnAll = document.querySelector('#btn-all');
btnAll.addEventListener("click", () => {
  businessesDOM();
});

// let btnNy = document.querySelector('#btn-ny');
// btnNy.addEventListener("click", () => {
//   yorkies();
// });

let btnPa = document.querySelector('#btn-pa');
btnPa.addEventListener("click", () => {
  agentsDOM();
});