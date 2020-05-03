/*---- Express ----*/
const express = require('express');
const router = express.Router();

/*----Firebase------*/
var firebase = require("firebase"); //don't need to initialize or config, already done
//referene the database
const db = firebase.firestore();

/*Get Single Post*/
const blogposts = db.collection("posts"); //reference to collections
//No longer using sample
//const docRef = blogposts.doc("sample-post"); //same as db.collection("blogposts").doc("sample")


//handling for no id
router.get('/', (req,res) => res.send("Please include an ID"));
//get request for single post with id
router.get('/:id', (req, res) => {
    const queryID = req.params.id; //getting query id for the post, /:name and query.name just have to be the same
    //get single item
    blogposts.doc(queryID).get().then(function(doc) {
        if (doc.exists) {
            //console.log("Document data:", doc.data());
            return res.send(doc.data());
        } else {
            // doc.data() will be undefined in this case
            //console.log("No such document!");
            return res.send("No such document exists");
        }
    }).catch(function(error) {
        //console.log("Error getting document:", error);
        return res.send(error);
    });
    }
);
//request for about/me
//router.get('/me', (req, res) => res.send('A special post')); //routes are relative to route set in app.js

//how to export in Express
module.exports = router;