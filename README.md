# Subscripshare
# API

The easiest way to develop on Subscripshare is to install:
- [docker](https://docs.docker.com/engine/installation/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [docker-machine](https://docs.docker.com/machine/install-machine/)

Make sure your Docker installation is working fine by typing `docker ps`. Under Mac OS X you may have to [run some commands](https://docs.docker.com/engine/installation/mac/) after installing to get Docker working in your shell.

[Make sure your user is part of the docker group](http://askubuntu.com/questions/477551/how-can-i-use-docker-without-sudo)
to avoid running all commands as root.

For Mac OS X users, the project folder must be in a subfolder of /Users, due to [an issue in docker-machine](https://github.com/docker/machine/issues/13).

Clone the project

**Specify environment variables in docker-compose.yml**

```
docker-compose run --rm api npm install
docker-compose up
```

## Development

Launch the api:
```
    docker-compose up
```

Connection to the web server container:

```
    docker exec -it subscripshare_api_1 bash
```


# Mobile app

## Getting started

Follow the **[Setup guide](docs/SETUP.md)** to get started.

## Development workflow

To learn how to structure your application and use the Redux application architecture, read the **[Architecture guide](docs/ARCHITECTURE.md)** for more details.

First of all:
```
  cd client
```
##### Start the application in iOS simulator
```
  react-native run-ios
```

##### Start the application in Android simulator
(If using the stock emulator, the emulator must be running)
```
  react-native run-android
```

##### Run unit tests
```
  npm test
```

##### Run tests every time code changes
```
  npm run test:watch
```

##### Generate code coverage report
```
  npm run coverage
```

Read the **[Testing guide](docs/TESTING.md)** for more information about writing tests.

## Deployment

Read the **[Deployment guide](docs/DEPLOYMENT.md)** to learn how to deploy the application to test devices, app stores, and how to use Code Push to push updates to your users immediately.
