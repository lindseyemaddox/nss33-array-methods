
import {businesses} from "./helpers.js";

const container = document.querySelector('#orders');

const ordersDOM = (keyPressEvent) => {

  if (keyPressEvent.charCode === 13) {

    businesses.find (businesses =>
      businesses.companyName.includes(keyPressEvent.target.value)
    );

    container.innerHTML = `
      <h2>${businesses.companyName}</h2>
      <section>
      ${businesses.addressFullStreet}
      </section>
      <section>
      ${businesses.addressCity},
      ${businesses.addressStateCode}
      ${businesses.addressZipCode}
      </section>
    `;
  }
};

export {ordersDOM};