<h1 align="center">
<img width="40" valign="bottom" src="https://angular.io/assets/images/logos/angular/angular.svg">
Scalable Angular Architecture Guide
</h1>
<h5 align="center">A cohesive guide for building Angular applications for teams.</h5>

<p align="center">:warning: Work In Progress :warning:</p>

## Folder Structure

```
|-- config
|   |-- development.json
|   |-- env.json
|   |-- production.json
|   `-- test.json
|-- hooks
|   |-- post-build.js
|   |-- pre-build.js
|   |-- pre-start.js
|   `-- pre-test.js
|-- i18n
|   |-- auth.en.json
|   |-- components.en.json
|   |-- en.json
|   `-- general.en.json
|-- index.html
|-- proxy.conf.json
|-- src
|   |-- app
|   |   |-- app.component.ts
|   |   |-- app-config.service.ts
|   |   |-- app.module.ts
|   |   |-- app-routing.module.ts
|   |   |-- auth
|   |   |   |-- auth-api-client.service.ts
|   |   |   |-- auth.module.ts
|   |   |   |-- auth-routing.module.ts
|   |   |   |-- auth.service.ts
|   |   |   `-- components
|   |   |       `-- login
|   |   |           |-- login.component.html
|   |   |           |-- login.component.scss
|   |   |           |-- login.component.spec.ts
|   |   |           `-- login.component.ts
|   |   |-- features-modules
|   |   |   |-- dashboard
|   |   |   |   |-- dashboard.component.html
|   |   |   |   |-- dashboard.component.scss
|   |   |   |   |-- dashboard.component.ts
|   |   |   |   |-- dashboard.module.ts
|   |   |   |   `-- dashboard-routing.module.ts
|   |   |   |-- posts
|   |   |   |   |-- components
|   |   |   |   |   |-- post-details
|   |   |   |   |   |   |-- post-details.component.html
|   |   |   |   |   |   |-- post-details.component.scss
|   |   |   |   |   |   |-- post-details.component.spec.ts
|   |   |   |   |   |   `-- post-details.component.ts
|   |   |   |   |   |-- post-form
|   |   |   |   |   |   |-- post-form.component.html
|   |   |   |   |   |   |-- post-form.component.scss
|   |   |   |   |   |   |-- post-form.component.spec.ts
|   |   |   |   |   |   `-- post-form.component.ts
|   |   |   |   |   `-- posts-list
|   |   |   |   |       |-- posts-list.component.html
|   |   |   |   |       |-- posts-list.component.scss
|   |   |   |   |       |-- posts-list.component.spec.ts
|   |   |   |   |       `-- posts-list.component.ts
|   |   |   |   |-- posts-api-client.service.ts
|   |   |   |   |-- posts.module.ts
|   |   |   |   |-- posts-routing.module.ts
|   |   |   |   `-- posts.service.ts
|   |   |    `-- ...
|   |   `-- shared
|   |       |-- animations
|   |       |   |-- fadeIn.animation.ts
|   |       |   |-- fallIn.animation.ts
|   |       |   |-- index.ts
|   |       |   |-- moveIn.animation.ts
|   |       |   |-- moveInLeft.animation.ts
|   |       |   `-- slideInRight.animation.ts
|   |       |-- async-services
|   |       |   `-- http
|   |       |       |-- data.service.ts
|   |       |       |-- http.interceptor.ts
|   |       |       |-- http.module.ts
|   |       |       |-- http-response-handler.service.ts
|   |       |       `-- index.ts
|   |       |-- components
|   |       |   |-- footer
|   |       |   |   |-- footer.component.html
|   |       |   |   |-- footer.component.scss
|   |       |   |   `-- footer.component.ts
|   |       |   |-- header
|   |       |   |   |-- header.component.html
|   |       |   |   |-- header.component.scss
|   |       |   |   `-- header.component.ts
|   |       |   |-- index.ts
|   |       |   |-- loading-placeholder
|   |       |   |   |-- loading-placeholder.component.scss
|   |       |   |   `-- loading-placeholder.component.ts
|   |       |   |-- page-not-found
|   |       |   |   |-- page-not-found.component.scss
|   |       |   |   `-- page-not-found.component.ts
|   |       |   `-- spinner
|   |       |       |-- spinner.component.scss
|   |       |       `-- spinner.component.ts
|   |       |-- containers
|   |       |   |-- index.ts
|   |       |   `-- layout
|   |       |       |-- layout.component.scss
|   |       |       `-- layout.component.ts
|   |       |-- errors
|   |       |   |-- components
|   |       |   |   |-- errors.component.html
|   |       |   |   |-- errors.component.scss
|   |       |   |   `-- errors.component.ts
|   |       |   |-- errors-handler.ts
|   |       |   |-- errors.module.ts
|   |       |   |-- errors-routing.module.ts
|   |       |   |-- errors.service.ts
|   |       |   |-- index.ts
|   |       |   `-- server-errors.interceptor.ts
|   |       |-- guards
|   |       |   |-- auth.guard.ts
|   |       |   `-- can-deactivate.guard.ts
|   |       |-- models
|   |       |   |-- auth
|   |       |   |   |-- login.model.ts
|   |       |   |   |-- register.model.ts
|   |       |   |   `-- user.model.ts
|   |       |   `-- index.ts
|   |       |-- interfaces
|   |       |   `-- post.interface.ts
|   |       |-- pipes
|   |       |   |-- index.ts
|   |       |   |-- sanitize-html.pipe.ts
|   |       |   `-- truncate.pipe.ts
|   |       |-- services
|   |       `-- utility
|   |           |-- index.ts
|   |           |-- utilityHelpers.ts
|   |           |-- utility.module.ts
|   |           |-- utility.service.ts
|   |           `-- validation.service.ts
|   |-- assets
|   |   `-- ...
|   |-- index.html
|   |-- scss
|   |   |-- _custom-styles.scss
|   |   |-- _custom-variables.scss
|   |   `-- mytheme.scss
|   |-- styles.scss
|   `-- ...
|-- sw-precache-config.js
`-- ...
```

## Stuff I included

- Root architecture
- Config app Service
- Route configuration

- Features modules architecture
- Component architecture
- Directory structure

- Auth module
- JWT Interceptor
- Guards

- Shared module contain (animations components, layouts, pipes, etc)
- TypeScript models/interfaces
- Errors Handler (http, client, server, expected/unexpected errors) with tracking errors
- Async Services for (Http, WebSocket, WebRTC, etc)

- CSS options (Sass/etc)
- Bootstrap integration
- Themes

- Translation Service
- Structure practices (lifecycle hooks/DI practices)
- Tooling (AoT/Webpack/etc)

## Stuff in progress

- State management (ngrx/store etc)

Inspired From:

- Angular architecture patterns http://netmedia.io/blog/angular-architecture-patterns-additional-application-features_5670
