const readline = require('readline');
const {availableInterests} = require("./staticfiles.js");
const {scoring} = require("./scores.js");

module.exports = {scoring};
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let user = [];
let size = availableInterests.length;

console.log("Choose your interests! The maximum number of interests that can be picked is 12!");
console.log("Available interests are:");
availableInterests.forEach(function(interest, index) {
    console.log((index + 1) + ". " + interest);
});
console.log("");

function askInterest(){
    if (user.length >= size){
        console.log("You've reached the max number of interests allowed!");
        console.log("Your selected interests are:", user);
        r1.close();
        finish();
        return;
    }
    r1.question("Enter an interest (or -1 to end the process): ", (input) => {
        if (input === "-1"){
            console.log("\nYour interests are:", user);
            r1.close();
            runner();
            return;
        }

        const interestIndex = parseInt(input) - 1;

        if (interestIndex >= 0 && interestIndex < size){
            const selectedInterest = availableInterests[interestIndex]
            if (!user.includes(selectedInterest)){
                user.push(selectedInterest);
                console.log(`Added: ${selectedInterest}`);
            }
            else {
                console.log("This interest was already picked!");
            }
        }
        else {
            console.log("Invalid Interest! Not part of the list!");
        }    
        askInterest();
    });
};

function runner(){
    const {scores, bestMatch, highestScore} = scoring(user);

    console.log("\nMatching Scores: ");
    console.log(`User1: ${scores.user1}`);
    console.log(`User2: ${scores.user2}`);
    console.log(`User3: ${scores.user3}`);
    console.log(`\nYour New Best Friend is: ${bestMatch} with a score of ${highestScore}`);
}

askInterest();

