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
    document.dispatchEvent(this.pageLoaded(page.component));
  }

  static pageLoaded(component) {
    return new CustomEvent("page-loaded", {
      detail: { component }
    });
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

class RouterLink extends HTMLAnchorElement {
  constructor() {
    super();
    this.addEventListener("click", (e) => {
      const route = this.getAttribute("href")
      Router.open(route);
      window.history.pushState({}, route, `${window.location.origin}${route}`);
      e.preventDefault();
    });
  }
}

customElements.define('router-link', RouterLink, { extends: "a" });