# TWEB Project 2017

## Description

This project is divided in two different repository that makes the project work. Here is the repository of the client side you can find the the second repository at the following link:
* https://github.com/CoolPolishGuy/TWEB-GitHub-Analytics-Agent

This link above gives the agent side which role is to fetch some data and publish it on a data file for the client.

The client is situed in this repository. Its role is to display information or the data that it has collected from the agent.

The agent is deployed in the cloud on heroku. Read the repo's README to know how it is working exactly.

## The architecture of the client.

First of all github gives us the possibility to publish static content, which we have used to put our website. Here is the link:
* https://coolpolishguy.github.io/TWEB-GitHub-Analytics-Static/

In this repository we have to main directory the first one is apache that can be used to launch our webPage locally or you can see a /docs directory which allows you to use the link above.

Now you want to lauch the webPage on you local machine then you need to follow this instructions:
  * Install docker on your machine and test it.
  * Git clone this repository
  * Go to apache-php-image/content
  * First command : docker build -t tweb/apache_php .
  * Second command : docker run -p 8080:80 tweb/apache_php
  * Go to your browser and input the ip of your localhost or the docker machine and add :8080 to it.

### Format of the data retrieved

Here is an example of how the data is structured in the file that the agent publishes and client retrieves.
Here is the link where the data is stored:
 * https://raw.githubusercontent.com/CoolPolishGuy/TWEB-GitHub-Analytics-Agent/master/data/data.json

Here is an example of the data is stored
```
{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}


```


## Authors
Jérémie Zanone and Wojciech Myszkorowski
