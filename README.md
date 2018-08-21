# Rolodex

This project allows organizations who run programs to log, assess, search, and filter those programs.  It is made up of 4 different components:

## Sliding Window

## Main Components

### Program

### Organization

### Contacts

#### Add Contact

Here, we use a child component named "contact-form-new" which provides an html form template file and business logic required to add a new contact.

The form is triggered by the "widgets/nav-bottom" component. Next, the following progression occurs:
- Button in component calls a function via (click) listener: "slideDrawer('new_contact')
- The argument, new_contact is passed to the nav-bottom component's instance of store, this.store.dispactch(new UI.ChangeDrawerApp(new_contact), which changes the content in the drawer
- The drawer is opened by calling "this.store.dispatch(new UI.OpenDrawer()).





#### Delete Contact
#### Edit Contact

### Admin

## Angular Project Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
