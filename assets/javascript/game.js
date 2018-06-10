// document . ready function

// Variables   wins, losses, array of words, array of letters in word

//functions   math.random on word array to find new word,  loop the found word create an underscore for each letter ,

//main process or game
// on key event listoner to start game , when clicked generate the new workd

// display the underscores for the word

//display already guessed letters

//display correct letters in the place of the underscores in the word

//at end of game automacitaly start new game
// <!-- the styling of the game  -->
// <!--  if the correct letter is guessed make a swish sound   -->
// <!--  if  in correct letter is guessed make a horse wininie sound  -->
// <!--  at end of game  update wins and losses -->
// <!--  for game one  do a celibration annimation and play a song , if lost play hourse sounds and a picure of a horse   -->

// <!-- then back to main game background  -->

// Variables

let wordList = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "brown",
  "black"
];
let currentWord = "";

let matchingLetters = [];
let numBlanks = 0;
let underscoreWord = [];
let badGuess = [];
let horse = document.createElement("img"); // horse image for loss
let celebrate = document.createElement("img"); // image for win
let wins = "";
let losses = "";
let guessesLeft = 5;

//functions

//key click to start game ,get word,make underscore word ect

//function to check letters

//function to complete a round

//

//calling functions for main game
//start game

//Register key clicks
