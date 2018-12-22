var shows = ["rugrats", "doug", "catDog", "arthur", "spongebob"];
var lettersGuessed = [];

var wrongWord = [];
var underscore = []; 
var guessLeft = 10;

var docUnderscore = document.getElementById('underscore');
var docRightGuess = document.getElementById('rightGuess');
 

var categories = document.getElementById("cartoons"); 
var lettersGuessedDisplay = document.getElementById("lettersGuessed");

var randNum = Math.floor(Math.random() * (shows.length -1));

console.log(randNum, "this should be the random number");
var choosenShow = shows[randNum];
var underscore = [];
 

var generateUnderscore = () => {
    console.log(choosenShow, "this should be random workd");
    for(var i = 0; i < choosenShow.length; i++){
        underscore.push('_');
        console.log(underscore);
        docUnderscore.innerHTML = underscore.join(' ');  
    }
    return underscore;
}


document.onkeypress = function(event){
   var letter = event.key;
   console.log(letter);
    if(choosenShow.includes(letter)){
        console.log("letter matched");
        for(var i = 0; i < choosenShow.length; i++){
            if(choosenShow[i] == letter) {
                underscore[i] = letter
                docUnderscore.innerHTML = underscore.join(' ');
            }
        }

        if(!underscore.includes('_')){
            alert('YOU WIN')
        }
        guessLeft --

       
    }else {
        lettersGuessed.push(letter);
        lettersGuessedDisplay.innerHTML = lettersGuessed;
        guessLeft--
    }
}


generateUnderscore(); 
// guessText.textContent  = "Guesses Left:" + guessLeft;

shows.textContent = "Guess the Cartoon" ;
//guess.textContent = "";
//letterGuessText.textContent = "Letters guessed:" +  letterGuess;

//var startButton = document.getElementById("start")[0];

//shows



