# Express Server setup basics

Starting in a new folder, initiate the node enviroment and generate a package.json using

# Part 1. The app

## Environment setup

```Bash
npm init -y
```

node package manager will now initiate a new enviroment, and use yes for all questions using the yes flag =y.

Now, install express

```Bash
npm install Express
```

The latest express package will be downloaded, and put into the node_modules folder, it's reference will be added to the package.json.

Now to create a basic express server. Start by creating a new file, app.js in the root directory.

```Bash
touch app.js
```

### Optional, initiate GIT

If you want to push this project to the repository eventually, setting up git in the enviroment is needed.

Initiate git in the working directory using

```bash
git init -b main
```

This will establish a git envriroment and set the working branch to main.

Before anything else, make sure to also create the .gitignore file.

```bash
touch .gitignore
```

In this file, add node_modules/ on the first line.
Anything else we would not want to publish to the entirety of the internet,
like secrets, credentials, etc. Should all be added here for reference.

Start by commiting the .gitignore file

```bash
git add .gitignore
git commit -m 'initial commit'
```

Use the same approach to add our other files, package-lock and package.json to the git staging.
As the project proceeds, remember to commit early and often, and use `git status` as needed to find any changes, as well as `git diff 'file path'` to review the changes if needed.

## The app.js file

App.js will server as the starting point for the Express server.
The file can be named anyhting we want, such as index.js, or main.js.
For the purposes of this project, we will simply go with app.js,
as stated in the Express docs

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello, world!'));

const PORT = 3000;
app.listen(PORT, () =>
    console.log(`My first express app - listening on port ${PORT}!`)
);
```

### **See app.js for a breakdown of each line.**

## The request's journey

With the server up and running on port 3000, we will be able to send a request to the route specified!

Navigating to https://localhost:3000/ while the Express server is running on the local computer, will result in the browser sending a GET request to the / path of the server we have established on port 3000 of the localhost domain.

The browser will then receive a response from the server, and display whatever it receives in the browser window!

Congratulations, you have in essence just unveiled how every connection with any website boils down to.

User sends a request to a domain and port

Server receives request, and processes it in a request object.

The request object is passed through a series of functions called middleware functions.

Server eventually sends a response to user via the same connection, based on the results of the request objects journey.

User browser unpacks response and displays its contents.

![Browser window of express response](./public/Screenshot_20240729_150506.png)

Our app for instance, accepts a request as a GET request to the / path. Which matches the route specified in the app.js file

```javascript
app.get('/', (req, res) => res.send('Hello, world!'));
```

The request is passed through the chain of middleware functions, in our case, we have a single one:

```javascript
(req, res) => res.send('Hello, world!');
```

Express passes the conventionally named req(uest) object, passed as the first parameter, and the res(ponse) object as the second parameter, into the callback function.

The callback tells the response object, to respond to the request by .send(ing) the string "Hello world!"

Since there is no more code to run, the function returns. And since Express has been told to respond to the request, it ends the request.response cycle.

The browser now receives the server's response, and displays it on screen. "Hello, world!" should now appear.

This could have been anything we would have wanted to defined, a math equation, a story, even a file.

## Developing the app

During development, various changes will be made. In order for most changes to manifest, we must restart the app.

To prevent a obnoxious amount of manual restarts, we can create a new node command in the package.json file, that will tell express to hot load changes using its built in --watch flag.

So go to package.json and add

```json
    "watch": "node --watch app.js"
```

in the scripts section of the file.

Running this script, will tell node to watch for changes, as well as any changes to files it depends on, and automatically restart the server.

Alternatively, nodemon, a highly customizable package can be added to the project and configured.
But this is a more advanced approach.

# Part 2. Routes

Setting up our first app.get was a great start. In any real app however, we would want to be able to handle many different types of requests, for various different tasks.

Enter, the routes.

Routes are a way to match a requests HTTP verb, like GET or POST, as well as the URL path, against the apps set of middleware functions - the controllers.

To use routes, we use expresses verb methods; `.get` and `.post`, and tie the request and response objects to the appropriate actions.

For example, lets take our previous route:

```javascript
app.get('/', (req, res) => res.send('Hello, world!'));
```

`app.get("/"...` tells the app that if it receives a GET request from a user to the / path, it should pass the request through the following set of functions.

Similarily, lets make a new path:

```javascript
app.post('/messages', (req, res) =>
    res.send('This is were you can eventually see any messages')
);
```

now, sending any post request to the localhost:3000/messages path, will tell Express to pass it through `app.post("/messages"...`s following set of functions, in this case, `res.send` again.

**If at any point you would want a route that matches against any HTTP verb, you can use app.all() to match against all verbs**

**Beside GET and POST verbs, there are various other HTTP verbs, like PUT and DELETE, commonly used in REST APIs, this will be covered later**
