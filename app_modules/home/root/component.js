import template from "./template.js";

export default class HomeRoot extends HTMLDivElement {

  static get route() { return ""; }
  static get is() { return "home-root" }

  constructor() {
    super()
  }

  connectedCallback() {
    const templateEl = document.createElement("template");
    templateEl.innerHTML = template;
    this.appendChild(templateEl.content.cloneNode(true));
  }

}