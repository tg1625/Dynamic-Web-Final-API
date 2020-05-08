/*----- FIREBASE ------ */
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase");
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDq0kNN6_mua4b68uQNq9eVB7UMZsTxzjc",
    authDomain: "final-project-f0e1e.firebaseapp.com",
    databaseURL: "https://final-project-f0e1e.firebaseio.com",
    projectId: "final-project-f0e1e",
    storageBucket: "final-project-f0e1e.appspot.com",
    messagingSenderId: "697304196124",
    appId: "1:697304196124:web:1b4cf713fd36b0c59debd9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

/* ---- EXPRESS --- */
//import express
const express = require('express')
//initiate express to app
const app = express()

//hopefully fix CORS stuff?
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});



//set port, use environmental variables, or use 4000 if it doesn't exist 
const port = process.env.PORT || 4000;

//Import routes
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const userRoute = require("./routes/user.js");
const createRoute = require("./routes/createPost.js");
const updateProfileRoute = require("./routes/updateProfile.js");

//Create routes 
app.use('/', indexRoute);
app.use('/post/', postRoute);
app.use('/create',createRoute);
app.use('/user/', userRoute);
app.use('/update', updateProfileRoute);


//Set up app to run
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))