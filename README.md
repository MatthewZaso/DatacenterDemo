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

### Developer notes
I wanted to start with a project structure that would mimic how I would ideally setup a similar project in my day-to-day work. For this reason, I included a simple, but complete stack of tools like Webpack 4 and Sass and the dev-server. This was helpful while building out all of the components. For cross-browser compatability PostCSS and Babel were also included to mimic a production application. The directory and class structure matches other projects that I've worked on in the past, with sections broken down into smaller components with their encapsulated markup and logic. The data structure for this was simple, but nonetheless I separated it out into its own file and dynamically rendered the content so it could easily be updated. This was made easy with lodash templates. I like to use them because aside from being simplistic it keeps the markup in the HTML files. This project also makes use of some of my favorite new web features like css grid and flexbox.

### Improvements
* Pixel-perfect design - With more time I would clean up the design and match the exact colors and sizing.
* Disabled states on toggles - I could add this logic into each component class to conditionally add disabled states
* Timestamps on apps - "Added 2min ago" could be achieved by bringing in a lightweight library like Moment.js


## Installation
#### 1. Clone the repository.
#### 2. Install dependencies & build project
```bash
$ npm run build:setup
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
* [Matt Zaso](zaso.matthew@gmail.com)
