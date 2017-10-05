# Contribution Guide

* Go to the root of the project
* Run `npm install` from the terminal
* Once installation is done, you can run `npm run dev`. This will keep on building css from your sass.
* Start Developing... Yay!!!
* Now for example you want to build "Icons" Component
* IN NEW TAB, Launch docs server by running `npm run docs-server`. And open `http://127.0.0.1:8021` in your browser
* Now inside docs/pages create "icons.html" file. Here you can test your changes.
* Update the array variable `pages` in docs/js/docs.js file. Add your page inside the array i.e icons.html `var pages = [...., 'icons'];`
* Once the docs.js is update. Open docs in your browser (`http://127.0.0.1:8021`)
* You will see icons in the sidebar.
* Keep on changing scss/building css and put html in `icons.html` to see the refelected changes. (Do hard refresh if the changes are not reflected)

[Roadmap](ROADMAP.md)