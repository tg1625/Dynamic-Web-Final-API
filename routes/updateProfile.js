/*---- Express ----*/
const express = require('express');
const router = express.Router();

/*----Firebase------*/
var firebase = require("firebase"); //don't need to initialize or config, already done
//referene the database
const db = firebase.firestore();

//handling for no id
router.get('/', (req, res) => {
    const queryParams = req.query;
    console.log(queryParams);
    if (queryParams != {}){
        // profile has same ID as the user ID
        var profile = db.collection('userProfile').doc(queryParams.id);
        delete queryParams.id;
        profile
        .set(queryParams, { merge: true })
        .then(function(doc) {
            res.send({ success: "Profile Updated!"});
        })
        .catch(function(error){
            console.log("Error:", error);
            res.send(`Error: ${error.toString()}`);
        });
    }else{
        res.send("No data sent");
    }
});
//request for about/me
//router.get('/me', (req, res) => res.send('A special post')); //routes are relative to route set in app.js

//how to export in Express
module.exports = router;