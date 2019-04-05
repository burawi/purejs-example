import { Router } from "./Router.js";
import homeModule from "/app_modules/home/index.js"
import StoreModule from "/app_modules/store/index.js"

Router.addModule("/", homeModule);
Router.addModule("/store", StoreModule);

const div = document.querySelector("#content");
Router.setContainer(div);
Router.open(window.location.pathname);