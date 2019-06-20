
import {businesses} from "./helpers.js";

const container = document.querySelector('#active-businesses');

const businessesDOM = () => {
  businesses.forEach(business => {
    container.innerHTML +=
    `<h3>${business.companyName}</h3>
    <p>${business.addressFullStreet}</p>
    <p><span>${business.addressCity}</span>, <span>${business.addressStateCode}</span> <span>${business.addressZipCode}</span></p><hr/>`;
  });
};

export {businessesDOM};