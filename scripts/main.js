
import {businessesDOM} from "./foreach.js";
// import {some stupid bullshit} from "./filter.js";
import {agentsDOM} from "./map.js";
import {ordersDOM} from "./find.js";

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

// let ordersField = document.querySelector('#orders');
document.querySelector("#ordersField").addEventListener("keypress", keyPressEvent => {
  ordersDOM(keyPressEvent);
});