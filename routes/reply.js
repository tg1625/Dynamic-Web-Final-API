const express = require('express');
const router = express.Router();

//Include Firebase
const firebase = require("firebase");
//reference the database
const db = firebase.firestore();
//reference to collections
const posts = db.collection("reply");

router.get('/', (req, res) => {
    const queryParams = req.query;
    if (queryParams){
        posts.doc()
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