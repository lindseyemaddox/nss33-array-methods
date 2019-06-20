
import {businesses} from "./helpers.js";

const container = document.querySelector('#purchasing-agents');

const agentsDOM = () => {

  const poop = businesses.map(business => {
    return business.purchasingAgent;
  });

  poop.forEach(soop => {
    container.innerHTML += `<h3>${soop.nameFirst} ${soop.nameLast}</h3>`;
    container.innerHTML += "<hr/>";
  });
};

export {agentsDOM};