const routesMap = [];
let container;

export class Router {

  static addModule(prefix, mdl) {
    mdl.forEach(page => {
      routesMap.push({ route: `${prefix}${page.route}`, component: page })
      customElements.define(page.is, page, { extends: "div" });
    });
  }

  static open(route) {
    const page = routesMap.find(r => new RegExp(`^${r.route}\$`).test(route));
    if (!page) return this.onNotFound(route);
    const newContent = document.createElement('div', { is: page.component.is });
    newContent.params = this.getPageParams(page.route, route);
    container.parentNode.replaceChild(newContent, container);
    this.setContainer(newContent);
    window.history.pushState({}, route, `${window.location.origin}${route}`);
  }

  static setContainer(el) {
    container = el;
  }

  static onNotFound(route) {
    container.innerHTML = `Cannot find route ${route}`;
  }

  static getPageParams(pageRoute, route) {
    const regex = new RegExp(pageRoute);
    const matches = regex.exec(route);
    ["index", "input", "groups"].forEach(k => delete matches[k]);
    matches.shift();
    return matches;
  }
}

window.onpopstate = () => {
  Router.open(window.location.pathname);
}

class RouterLink extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", () => {
      Router.open(this.getAttribute("to"));
    });
    let style = {
      cursor: "pointer"
    };
    Object.assign(this.style, style);
  }
}

customElements.define('router-link', RouterLink);