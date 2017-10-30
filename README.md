Paws.com Style Guide
===========

## Requirements
You only need <b>node.js</b> and <b>yarn</b> pre-installed and you’re good to go. 

## Setup
Install dependencies
```sh
$ yarn
```

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:8080/](http://localhost:8080/)
```sh
$ yarn start
```
## Deployment
Build the current application
```sh
$ yarn build
```

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
