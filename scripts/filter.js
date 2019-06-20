
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



// The filter function creates a new array from the existing one,
// so you can invoke it and assign it to a new variable
// such as in the code below. The function that you pass to
// filter() should return true or false.
// If it returns true, then the current item will be placed
// in the new array.
// PS pronouns are the special bitch of poor explanation.
// PPS maybe a little less Doris and a little more WTF is this shit?
