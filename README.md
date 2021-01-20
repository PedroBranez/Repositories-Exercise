# Repositories Exercise

## Table of contents
* [Description](#description)
* [Technologies](#technologies)
* [Installation](#installations)
* [Usage](#usage)

## Description

> This is a simple application whose goal is accomplish the lecture of JSON files containing information about different users. s
Once the information is processed, each user are shown in a list in wich we can see their data.

## Technologies
Project is created with:
* VueJs 2.6.11
* Vuetify 2.2.11
* NodeJS 14.15.4
* JavaScriptES6
* HTML5

## Installation

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Usage

The application consist of 2 pages:

### Index page

On this page using a controller, allows us to upload a local JSON file
that contains the information of the users that we want to visualize.
First we select the input-field so that later we can search for the JSON file in our directory in which we have the information. Once the corresponding file has been selected and confirmed, we proceed to click on the "UPLOAD" button, through which our file will be uploaded and processed. An alert will appear that will let us know if the file was read correctly or there is something wrong with it.

### Repositories Page

On this page we can see the users from the JSON file we upload
previously. Each user consists of 4 attributes: 
- name
- nickname
- repository_url
- avatar_url  

the avatar_url may not exist and in this case, a default image will be provided. As we can see, each user has a card in wich we can see their informatio. In order to access to  their repository, we simply click on the icon that is in the right part of the card and we will be redirected to the corresponding page.
