var listOfWords = [
     { word: "laugh", img: "assets/images/laugh-s.jpg", music: "" },
     { word: "scowl", img: "assets/images/scowl-s.jpg", music: "" },
     { word: "sad", img: "assets/images/sad-s.jpg", music: "" },
];

var random;
var randomWord;// = (listOfWords[random].word);
var randomWordLength;// = randomWord.length;
//console.log (randomWord+randomWordLength);


var guessNumber = 10;
var dash = ["-"];
var numberOfAnswersArray = [];
function empty() {
     dash = [];
     numberOfAnswersArray=[];
     guessNumber=10;
     numberOfAnswers.textContent="";
}

var wins = 0;

var correctAnswer = document.getElementById("correct-answer");
var numberOfWins = document.getElementById("number-of-wins");
var currentWord = document.getElementById("current-word");
var numberOfGuesses = document.getElementById("number-of-guesses");
var numberOfAnswers = document.getElementById("number-of-answers");
var image = document.getElementById("picture");

//create array for wrong answers



var alphabet = "abcdefghijklmnopqrstuvwxyz";
var start = true;


document.onkeyup = function (event) {

     var userGuess = event.key;


     if (start == true) {
          random = [Math.floor(Math.random() * listOfWords.length)];
          randomWord= (listOfWords[random].word);
          randomWordLength = randomWord.length;
          empty();
        
          //remove elements from dash to match length of the random word
          do { dash.push('-'); }
          while (dash.length < randomWordLength);
          //show dash in display "-------"
          currentWord.textContent = dash.join(" ");
          numberOfGuesses.textContent = guessNumber;
          start = false;
     }

     if (alphabet.includes(userGuess)) {

          if (guessNumber > 0 && dash.join("") !== randomWord) {

               //if letter is in the word
               //replace Dash with a letter
               //decrease # of guesses

               //if letter is in already guessed words or in a random word
               //return;
               //if letter is not in word and hasn't been guessed
               //decrease # of guesses
               //add a letter to answer array

               //
               if (numberOfAnswersArray.includes(userGuess) || dash.includes(userGuess)) {

                    return;

               } else if (randomWord.includes(userGuess)) {

                    //new var to check element number in random word
                    var elementArray = randomWord.indexOf(userGuess);
                    //assign new value to dash array
                    dash[elementArray] = userGuess;
                    //show new array in html
                    currentWord.textContent = dash.join(" ");
                    //decreade number of guesses
                    guessNumber--;
                    //show number of guesses in html
                    numberOfGuesses.textContent = guessNumber;
                    if (dash.join("") == randomWord) {
                         wins++;
                         numberOfWins.textContent = wins;
                         correctAnswer.textContent = randomWord;
                         image.src = listOfWords[random].img;
                         start=true;
                         alert("You won!");
                    }
               } else {
                    console.log("Hello");
                    // add a wrong letter to array
                    numberOfAnswersArray.push(userGuess);
                    //decrease number of guesses 
                    guessNumber--;
                    //show number of guesses
                    numberOfGuesses.textContent = guessNumber;
                    //show array a wrong letters
                    numberOfAnswers.textContent = numberOfAnswersArray.join();
                    if (guessNumber == 0) {
                         correctAnswer.textContent = randomWord;
                         image.src = listOfWords[random].img;
                         alert("You lost!");
                         wins=0;
                         numberOfWins.textContent=wins;
                         start=true;
                    }
               }

         

          }
     }




};








