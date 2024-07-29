# Express Server setup basics

Starting in a new folder, initiate the node enviroment and generate a package.json using

## Enviroment setup

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

## The app.js file

App.js will server as the starting point for the Express server.
The file can be named anyhting we want, such as index.js, or main.js.
For the purposes of this project, we will simply go with app.js,
as stated in the Express docs
