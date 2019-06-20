
import {businesses} from "./helpers.js";

const container = document.querySelector('#ny-businesses');




function inNY() {
  nyDOM();
  return businesses.addressStateCode === "NY";
}

function yorkies() {
  businesses.filter(inNY);
}

export {yorkies};


const nyDOM = (business) => {
    container.innerHTML +=
    `<h3>${business.companyName}</h3>`;
};

// export {yorkies};

// Use filter() to create another array named
// manufacturingBusinesses that will contain all
// businesses in the manufacturing industry.
// Display those to the DOM.
