
### Application Blueprint
* Always up-to-date [React Native](https://facebook.github.io/react-native/) scaffolding
* Modular and well-documented structure for application code
* [Redux](http://redux.js.org/) and [ImmutableJS](https://facebook.github.io/immutable-js/) for safe and **Reasonaboutable**:tm: state management
* [Redux Loop](https://github.com/raisemarketplace/redux-loop) for Elm-style controlled side effects
* Redux-managed Navigators for Stack-based and Tabbed navigation with NavigationExperimental
* Disk-persisted application state caching for offline support and snappy startup performance
* :warning: Sample app to show how to wire it all together
* :warning: Clean and testable service layer for interacting with RESTful APIs
* :star: JSON Web Token authentication
* :star: Multi-environment configuration (dev, staging, production) for iOS and Android
* :star: Built-in error handling and customizable error screens

### Testing Setup

* [Mocha](https://mochajs.org/) for unit testing application code
* [Enzyme](https://github.com/airbnb/enzyme) and fully mocked React Native for unit testing UI components
* [Istanbul](https://github.com/gotwarlost/istanbul) code coverage
* Utilities for end-to-end integration testing Redux state, including side effects and asynchronous actions

### Development & Deployment Infrastructure

* [Auth0](https://auth0.com/) for ready-to-use login and signup screens, user authentication and identity management
* [Bitrise.io](https://www.bitrise.io) configurations for Continuous Integration and beta app distribution
* :warning: [Google Tag Manager](https://www.google.com/analytics/tag-manager/) analytics
* :star: [Microsoft Code Push](http://microsoft.github.io/code-push) for Continuous Deployment and instant app updates


## Getting started


Follow the **[Setup guide](docs/SETUP.md)** to get started.

## Development workflow

To learn how to structure your application and use the Redux application architecture, read the **[Architecture guide](docs/ARCHITECTURE.md)** for more details.

##### Start the application in iOS simulator
```
$ react-native run-ios
```

##### Start the application in Android simulator
(If using the stock emulator, the emulator must be running)
```
$ react-native run-android
```

##### Run unit tests
```
$ npm test
```

##### Run tests every time code changes
```
$ npm run test:watch
```

##### Generate code coverage report
```
$ npm run coverage
```

Read the **[Testing guide](docs/TESTING.md)** for more information about writing tests.

## Deployment

Read the **[Deployment guide](docs/DEPLOYMENT.md)** to learn how to deploy the application to test devices, app stores, and how to use Code Push to push updates to your users immediately.
