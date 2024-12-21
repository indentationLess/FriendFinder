const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const user1 = ["Rap Music", "Videogames", "Movies"];
const user2 = ["Rock Music", "Movies", "Sports"];
const user3 = ["Videogames", "Programming", "Math"];

const availableInterests = ["Rap Music", "Rock Music", "Videogames", 
                            "Movies", "Sports", "Programming", 
                            "Math", "Metal Music", "Classical Music",
                            "Pop Music", "Fiction Books", "Non-Fiction Books"];
let user = [];
let size = availableInterests.length;

console.log("Choose your interests! The maximum number of interests that can be picked is 9!");
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
        scoring();
        return;
    }
    r1.question("Enter an interest (or -1 to end the process): ", (input) => {
        if (input === "-1"){
            console.log("\nYour interests are:", user);
            r1.close();
            scoring();
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

function compareInterests(interest, scores){
    if (user1.includes(interest)) scores.user1++;
    if (user2.includes(interest)) scores.user2++;
    if (user3.includes(interest)) scores.user3++;
}

function scoring(){
    const scores = {
        user1: 0,
        user2: 0,
        user3: 0,
    };
    
    user.forEach(function(interest){
        compareInterests(interest, scores);
    });

    console.log("\nMatching Scores: ");
    console.log(`User1: ${scores.user1}`);
    console.log(`User2: ${scores.user2}`);
    console.log(`User3: ${scores.user3}`);

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
    console.log(`\nYour New Best Friend is: ${bestMatch} with a score of ${highestScore}`);
}

askInterest();

