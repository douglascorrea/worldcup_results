
Use

```yarn start_dev```

To start the application in dev mode pointing to a dev-server.
It will build LESS, run dev-server for serving api and ALSO run TESTS in watch-mode (need to install watchman)

```yarn start_prod```

To start the application in prod mode pointing direct to http://worldcup.sfg.io/
It will build the application first

# Testing

Please install watchman to run tests on watch mode:

```brew install watchman```

```yarn test```

As said above, it will automatically run on using ```yarn start_dev```

For getting coverage stats run:

``` yarn test --coverage ```