var shows = ["Rugrats", "Doug", "CatDog", "Arthur", "Spongebob"];
var lettersGuessed = [];
var choosenShow = [];
var wrongWord = [];
var underscore = []; 
var guessLeft = 10;

var docUnderscore = document.getElementById('underscore');
var docRightGuess = document.getElementById('rightGuess');
 

var categories = document.getElementById("cartoons"); 
var lettersGuessed = document.getElementById("lettersGuessed");

var randNum = Math.floor(Math.random() + shows.length);
var choosenShow = shows[randNum];
var underscore = [];
 

var generateUnderscore = () => {
    for(var i = 0; i < choosenShow,length; i++){
        underscore.push('_');
        docUnderscore[0].innerHtml = underscore.join('');  
    }
    return underscore;
}


document.addEventListener('keypress', (event) =>{
    var keyword = String.fromCharCode(event.keycode);
    if(choosenShow.indexOf(keyword) ) {
        rightWord.push(keyword);
        docUnderscore[0].innerHTML = underscore.join('');
        underscore[choosenShow.indexOf(keyword)] = keyword;
        docRightGuess[0].innerHTML = rightWord;
        if(underscore.join('') == choosenShow){
            alert('YOU WIN!')
        }
    }  
    else {
        wrongWord.push(keyword);
    }
}); 

generateUnderscore(); 
// guessText.textContent  = "Guesses Left:" + guessLeft;

shows.textContent = "Guess the Cartoon" ;
//guess.textContent = "";
//letterGuessText.textContent = "Letters guessed:" +  letterGuess;

//var startButton = document.getElementById("start")[0];

//shows



