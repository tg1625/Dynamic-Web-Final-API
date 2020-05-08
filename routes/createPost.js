const express = require('express');
const router = express.Router();

//Include Firebase
const firebase = require("firebase");
//reference the database
const db = firebase.firestore();
//reference to collections
const posts = db.collection("posts");


// /create
// router.get('/', (req, res) => res.send(form));
// /create/submit
router.get('/', (req, res) => {
    const queryParams = req.query;
    if (queryParams){
        // Add a new document with a generated id.
        var newPostRef = db.collection("posts").doc();
        //adding the docs id as a field so we can use it later
        queryParams["postid"] = newPostRef.id;
        posts.doc(newPostRef.id)
        .set(queryParams)
        .then(function(doc) {
            res.send({ success: "Successful submission"});
        })
        .catch(function(error){
            console.log("Error:", error);
            res.send(`Error: ${error.toString()}`);
        });
    }else{
        res.send("No data sent");
    }
});

//how to export in Express
module.exports = router;