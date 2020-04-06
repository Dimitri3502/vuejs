# vuejs

> learning project

## Prerequisites

- A Git repository
- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/) 
- [VSCode](https://code.visualstudio.com/download) with the extention Vetur for vuejs
- (Optional but **strongly recommended**) Install [vue-devtools](https://github.com/vuejs/vue-devtools)

## Create an app with vue-cli

```bash
# install vue-cli
npm install -g @vue/cli

# check if it works
vue --version

# create app, choose npm
vue create cocktails

# change folder
cd cocktails

# install dependencies
npm install

# serve and open your browser at localhost:8080 
npm run serve
```
## Start coding UI to list our cocktails

```bash
# install component ui library
vue use vuetify

# Install axios for API cals
npm install axios --save

# Install json-server to serve data
npm install -g json-server

# in an other terminal run json-server and do not close it !
json-server --watch db.json

```