const {user1, user2, user3} = require("./staticfiles.js");

function compareInterests(interest, scores){
    if (user1.includes(interest)) scores.user1++;
    if (user2.includes(interest)) scores.user2++;
    if (user3.includes(interest)) scores.user3++;
}

function scoring(userInterests){
    const scores = {
        user1: 0,
        user2: 0,
        user3: 0,
    };
    
    userInterests.forEach(function(interest){
        compareInterests(interest, scores);
      });

    let highestScore = Math.max(scores.user1, scores.user2, scores.user3);
    let bestMatch = "";

    if (highestScore === scores.user1){
        bestMatch = "User1";
    }
    else if (highestScore === scores.user2){
        bestMatch = "User2";
    }
    else if (highestScore === scores.user3){
        bestMatch = "User3";
    }

    return {scores, bestMatch, highestScore};
};

module.exports = {compareInterests, scoring};