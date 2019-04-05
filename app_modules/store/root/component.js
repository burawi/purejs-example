import Store from "../model.js";
import template from "./template.js";

export default class StoreRoot extends HTMLDivElement {

  static get route() { return ""; }
  static get is() { return "store-root"; }

  constructor() {
    super()
  }

  connectedCallback() {
    const list = Store.findAll();
    const templateEl = document.createElement("template");
    templateEl.innerHTML = template({ list });
    this.appendChild(templateEl.content.cloneNode(true));
  }

}