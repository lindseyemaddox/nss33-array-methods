
import {businessesDOM} from "./foreach.js";
import {yorkies} from "./filter.js";

let btnAll = document.querySelector('#btn-all');
btnAll.addEventListener("click", () => {
  businessesDOM();
});

let btnNy = document.querySelector('#btn-ny');
btnNy.addEventListener("click", () => {
  yorkies();
});
