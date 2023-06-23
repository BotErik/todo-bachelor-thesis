# Directory Structure

This file describes the directories in this project.

## assets

## components

## docs

additionally to project-root README.md and its first-project informations.
this is the place for detailed development-related documentation on the topic of installation, configuration, project specifics etc.

## helpers

this is a common directory in many frameworks for functions that are reusable throughout the project.

## layouts

This folder contains vue-files that serve to structure various page types, to define more the general page-layout.

```JavaScript
layouts/
|- page-default.vue // this defines the default-layout for one column-page's with header, main and footer element
|- page-detail.vue // this defines a layout for 2 column-pages with a header, aside + main and a footer element
```

## mixins

A mixin-object is a vue-components-object which can be reused and imported in different Vue components.
all options in the mixin will then be “mixed” into the component’s own options.

```JavaScript
mixins/
|- page-messages-mixin.vue
|- page-translation-mixin.vue
|- index.js  // to include all mixins at once
```

```JavaScript
page-messages-mixin.vue


export var pageMessageMixin = {
  methods: {
    printMyMessage(data) {
      return `Hallo Welt ${data}`
    }
  }
}
```

## plugins

While it's called plugins I don't always necessarily use the term in the strictest sense.
The plugins directory contains global-level Vue functionalities that you want to run before instantiating the Vue-root Application.

This is the place to add functionalities like:

- global methods or properties
- global assets: directives/filters/transitions
- external vue-plugins
- Vue instance methods by attaching them to Vue.prototype

## router

this folder contains all the configuration and logic of vue routing.

## store

this is the place to organize your state-management-pattern logic (e.g. for Vuex).

```JavaScript
store/
|- modules/
    |- cart.js       // cart store-module
    |- products.js   // products store-module
|- index.js       // initialize VueX, include other store-module
```

## views

this folder contains some VueJs components as entrypoint for specific routes.

```JavaScript
views/
|- Home.vue
|- DetailSite.vue
|- Blog.vue
```

## lang

the task of this folder is the configuration and grouping of translations (e.g. with vue-I18n).
