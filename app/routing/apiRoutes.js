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
    
        
        app.post("/api/friends", function (req, res) {
            console.log(req.body);
            
            var user = req.body;
            var userScores = user.scores;
    
                    var bestMatch = friends[0];
                    var bestScore = 100;
                    var compScore = 0;
    
                    for (var i in friends) {
                        for (var j = 0; j <10; j++) {
                            compScore += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
                            console.log("this is the scoring" + compScore);
                        }
                        if ((bestScore > compScore) && (user.name != friends[i].name)) {
                            bestMatch = friends[i];
                            bestScore = compScore;
                        }
                        compScore = 0;
                    }
            var findName = true;
            for (var i = 0; i < friends.length; i++) {
                if (user.name == friends[i].name) {
                    findName = false;
                }
            }
            if (findName) {
                friends.push(req.body);
            }
            res.json(bestMatch);
        });

    }