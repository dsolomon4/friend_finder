var friends = require("../data/friends");

var path = require("path");





module.exports = function (app) {

    // =============================================================


    // 4. Your `apiRoutes.js` file should contain two routes:

    //*A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", (req, res) => {
        res.json(friends);

    });

    //A POST routes `/api/friends`. This will be used to handle incoming survey results.
    // This route will also be used to handle the compatibility logic. 
    app.post("/api/friends", (req, res) => {
        // console.log("api js: " + newFriends)

    });

}