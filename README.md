# EditPoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.
Simple app to Update employee name and at the same time show the list in two different component.
While editing name list should not change, after clicking on update it should reflect in both list.
Used index to get the edited employee and update employee name with index from other component.
 
* First create service with list of employee
* Create two component to display Employee, one is to edit and other for details
* Add edit button in edit component and pass employee name and index when user click in edit
* Add one event emitter in Edit component to emit edited employee data to parent
* Capture event in parent event and bind the details 'name' to text box to make that editable.
* Call method of service when user click on update button and update array of object based on index.
* Now changes will reflect on both component.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
