[![Code Climate](https://codeclimate.com/github/ngelx/carpoolear/badges/gpa.svg)](https://codeclimate.com/github/ngelx/carpoolear)
[![Test Coverage](https://codeclimate.com/github/ngelx/carpoolear/badges/coverage.svg)](https://codeclimate.com/github/ngelx/carpoolear/coverage)
[![Issue Count](https://codeclimate.com/github/ngelx/carpoolear/badges/issue_count.svg)](https://codeclimate.com/github/ngelx/carpoolear)

# Carpoolear frontend

Carpoolear es la primera aplicación argentina de Facebook que permite a los usuarios de dicha red social compartir viajes en automóvil con otros usuarios de su entorno.

Es una customización ad-hoc para Argentina de la filosofía carpooling, la cual consiste en compartir nuestros viajes en auto con otras personas de forma cotidiana. El carpooling es una práctica popular en Estados Unidos y Europa, donde se realiza de manera organizada para lograr aumentar el número de viajes compartidos y que estos sean concretados con otras personas además de nuestros vecinos y amigos.


# Contributing

Respetar la siguiente configuración de linting: /*jshint esversion: 6*/

Los nombres de las variables y métodos son en inglés

## Requirements

- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)

`Note for OSx`: we tackle the sync issue using  [docker-for-mac](https://docs.docker.com/docker-for-mac/) and [docker-sync](http://docker-sync.io/)

## Start coding

1- Fork the repo

2- Clone your Repo
```
git clone https://github.com/{you}/carpoolear.git
```

3- Link the compose file

``` bash
# OSX
ln -s docker-compose-osx.yml docker-compose.yml

# Linux
ln -s docker-compose-linux.yml docker-compose.yml

# Windows
ln -s docker-compose-win.yml docker-compose.yml
```

4- Start the Docker dev env

``` bash
# Only for OSx
docker-sync start
```

``` bash
# install dependencies
docker-compose run web npm install

# serve with hot reload at localhost:8080
docker-compose up
```

Happy coding

# License

The Carpoolear frontend is open-sourced software licensed under the [GPL 3.0](https://github.com/STS-Rosario/carpoolear_backend/blob/master/LICENSE).
