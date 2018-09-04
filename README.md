# Dockerized ESRI Geoportal

## Installation
 
Clone the repository to your local drive. In order to build the containers and run them, use the following commands:
```bash
$ git clone https://github.com/vishnuvardhank7/geoportalv1.0.git
$ cd Demo/src
$ docker network create geoportal
$ docker-compose build
$ docker-compose up
```

## Run the applications

* Connect to http://192.168.99.100:8080/geoportal to see the geoportal in action. 

## Requirements

* Docker
