# FakeUmbrella

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

This demo use json-server for mock REST API, data store the db.json in the root folder.
Steps to run:
1. In a terminal: install json-server: npm install -g json-server
2. Cd to the folder where db.json located, run json-server db.json, the Rest API is up with port localhost: 3000.
3. Open a new terminal, change to project root, then run:
    npm install 
    ng serve --open to run the app under Angular Dev Web.