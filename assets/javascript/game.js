// possible outcomes from computer
var pyschicOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];

//Total wins
var wins = 0;

//Total losses
var losses = 0;

var Guesses = 9;
var guessesUsed = [];

document.onkeyup = function(event){
    var userGuess = event.key;
    var pyschicChoice = pyschicOptions[Math.floor(Math.random()*pyschicOptions.length)];
    
    if(guessesUsed.indexOf(userGuess) < 0 && pyschicOptions.indexOf(userGuess) >= 0){
        guessesUsed[guessesUsed.length] = userGuess;
    };
    if(userGuess===pyschicChoice){
        wins++;
        Guesses = 9;
        guessesUsed = [];
    }
    else{
        Guesses--;
    }

    if(Guesses===0){
        losses++;
        Guesses=9;
        guessesUsed = [];
    }
    
    
    

    var html = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses: " + Guesses + "</p>" +
    "<p>Letters Guessed: " + guessesUsed + "</p>";
    

    document.querySelector("#game").innerHTML=html;
    

};




