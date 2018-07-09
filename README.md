# Datacenter Demo

A simulation of the mesosphere data manager.

## Summary

This simple webpage is a visual demonstration the functionality of the mesosphere server canvas.

### Dependencies
* Autoprefixer - PostCSS plugin for cross-browser CSS support
* Babel - Allows for ES6 to ES5 transpiling
* CSS-Loader - Bundles CSS into a single file that can be included in the HTML
* ESLint - JavaScript code linter
* HTML-Webpack-Plugin - Webpack loader for HTML files. Used in this instance for our main HTML file.
* Lodash - Lightweight JS helper library. Used here for its simple templating system.
* PostCSS Loader - CSS loader for Webpack that allows us to use Autoprefixer
* ResetCSS - CSS file that clears all default browser styles
* SassLoader - Allows us to use the CSS preprocessor Sass
* Webpack - Our project bundler
* Webpack Dev Server - Simple server to host our project which includes hot reloading.

## Installation
#### 1. Clone the repository.
#### 2. Install dependencies & build project
```bash
$ npm start
```

Development
-------------
If you wish to run the project environment locally, you can follow these steps. The `dist` folder is checked in, so this is only required if you want to edit the project.

#### Run build server and watch files
```bash
$ npm run build:watch
```

#### Build for release
```bash
$ npm run build:prod
```

Viewing Application
-------------
The application can accessed using the URL the dev server displays in the terminal. Additionally, you can simply view the application by opening `dist/index.html` in your browser locally.

Authors
-------
* [Matt Zaso]
