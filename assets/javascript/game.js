// possible outcomes from computer
var pyschicOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];

//Total wins
var wins = 0;

//Total losses
var losses = 0;
//Total Guesses
var Guesses = 9;
//array to setup letters guessed
var guessesUsed = [];
//function for game
document.onkeyup = function(event){
    //allows key that user presses to stand as guess
    var userGuess = event.key;
    //lets the computer guess a random number
    var pyschicChoice = pyschicOptions[Math.floor(Math.random()*pyschicOptions.length)];
    //makes the wrong letters guessed list
    if(guessesUsed.indexOf(userGuess) < 0 && pyschicOptions.indexOf(userGuess) >= 0){
        guessesUsed[guessesUsed.length] = userGuess;
    };
    // if user gets it right guesses restars, wins increase, 
    // and guessed letters clears
    if(userGuess===pyschicChoice){
        wins++;
        Guesses = 9;
        guessesUsed = [];
    }
    //if not correct guesses decrease
    else{
        Guesses--;
    }
    //if user runs out of guesses losses decrease, losses increase,
    //and guessed letters erase
    if(Guesses===0){
        losses++;
        Guesses=9;
        guessesUsed = [];
    }
    
    
    
    //variable that makes the elements writeable on a webpage
    var html = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses: " + Guesses + "</p>" +
    "<p>Letters Guessed: " + guessesUsed + "</p>";
    
    //writes the amount of all elements on the webpage
    document.querySelector("#game").innerHTML=html;
    

};




