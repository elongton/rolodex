# Rolodex

This project allows organizations who run programs to log, assess, search, and filter those programs.  It is made up of 4 different components:

## Drawer
The drawer component is the main medium on desktop sized devices for CUD (create, update, and destroy) type actions.

The drawer canvas is stored on the top layer html template or root module. 


## Main Components

### Program

### Organization

### Contacts

#### Add Contact

##### Open the drawer with correct form
The form is triggered by the "widgets/nav-bottom" component.
- Button in component calls a function via (click) listener: "slideDrawer('new_contact')
- The argument, new_contact is passed to the nav-bottom component's instance of store, this.store.dispactch(new UI.ChangeDrawerApp(new_contact), which adds the component "contact-form-new" to the drawer
- The drawer is opened by calling "this.store.dispatch(new UI.OpenDrawer()).
##### Submit form
The user fills out the form defined by "contact-form-new.component.html" and taps the submit button.  The form utilizes the template approach of creating forms in Angular. The form click listener (ngSubmit) calls a function, onSubmit(f), which uses a local reference, #f = 'ngForm'.  
- onSubmit() calls the dispatch method of the component's instance of store, this.store.dispatch(new CT.AddContact(form.value as Contact)
- the dispatch method is intercepted by the contact.effects.ts file which updates the database via http.post (HttpClient)
- the drawer is then closed via UIActions.CLOSE_DRAWER defined in ui.action.ts
- the CT.AddContact object is dispatched, and this updates the local store with a new contact

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
