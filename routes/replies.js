/*-------Express------*/
const express = require('express');
const router = express.Router();

/*----Firebase------*/
var firebase = require("firebase"); //don't need to initialize or config, already done
//referene the database
const db = firebase.firestore();


router.get('/', (req,res) => res.send("Please include an ID for a post"));
/*Get All Replies for a post*/
router.get('/:id', (req, res) => {
    const queryID = req.params.id;
    if(queryID){
        var replyarray = []; //multiple posts, in the get to reset on reload
        db.collection("reply").where("postid", "==", queryID)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                    replyarray.push(doc.data());
                });
                return res.send(replyarray); //doing the returns in this get to handle errors
            })
            .catch(function(error){
                console.log("Error:",error);
                return res.send(error); //handling errors here 
            });  
    }  
});


//how to export in Express
module.exports = router;