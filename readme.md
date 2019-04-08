Here is a working example that uses nothing but new JS features.

## Usage

1- Clone the repo

2- Move to the repo folder:
```
cd purejs-example
```
3- Install node modules (nothing but live-server):
```
npm i
```
4- Start the app:
```
npm start
```

PS: If you're using VSCode, you can install **ES6 String HTML** extension (`hjb2012.vscode-es6-string-html`), in order to highlight html in js strings.

### Explanation
This is a short explanation of what's the code doing:
In this example, we used the JS you already know, nothing special (except if you want to consider web components special).
- Every page is a web component (`components.js` files).
- Every page component extends div element and has its name (`is` attribute) in a static getter called `is` (wow).
- Those pages are grouped into a module
- Each module resides in a folder
- Each module is an array of its pages (web components)
- `main.js` is our main file (wow again)
- Our main file imports the modules one by one
- Our main file imports the router (`Router.js`).
- Each module is added to router with a prefix
- The router is a class
- The router has method that runs every time we want to display a page `open`
- The `open` method looks for the page which has `route` property matching new URL.
- Then it replaces the old pages component by the new one

