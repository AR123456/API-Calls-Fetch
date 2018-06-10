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
let winCount = 0;
let lossCount = 0;
let guessesLeft = 5;

//functions

//key click to start game ,get word,make underscore word ect
function startGame() {
  currentWord = wordList[Math.floor(Math.random() * wordList.length)];
  matchingLetters = currentWord.split("");
  numBlanks = matchingLetters.length;
  guessesLeft = 5;
  badGuess = [];
  underscoreWord = [];
  for (let i = 0; i < numBlanks; i++) {
    underscoreWord.push("_");
  }
  document.getElementById("underscoreWord").innerHTML = underscoreWord.join(
    "  "
  );
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("winCounter").innerHTML = winCount;
  document.getElementById("lossCount").innerHTML = lossCount;

  console.log("current word is: ", currentWord);
  console.log("matching letters are: ", matchingLetters);
  console.log("number of blanks: ", numBlanks);
  console.log("underscored word:  ", underscoreWord);
}
//function to check letters
function checkLetters(letter) {
  let isLetterInWord = false;
  for (let i = 0; i < numBlanks; i++) {
    if (currentWord[i] == letter) {
      isLetterInWord = true;
    }
  }

  if (isLetterInWord) {
    for (let i = 0; i < numBlanks; i++) {
      if (currentWord[i] == letter) {
        underscoreWord[i] = letter;
      }
    }
  } else {
    badGuess.push(letter);
    guessesLeft--;
  }
  console.log("underscored word in check letters:  ", underscoreWord);
}

//function to complete a round
function roundComplete() {
  console.log(
    "Win Count: ",
    winCount,
    "|Loss Count: ",
    lossCount,
    "|Guesses Left: ",
    guessesLeft
  );
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("underscoreWord").innerHTML = underscoreWord.join(
    "  "
  );
  document.getElementById("wrongGuesses").innerHTML = badGuess.join("  ");

  if (matchingLetters.toString() == underscoreWord.toString()) {
    winCount++;
    //add celebration
    // emoji.src = "./assets/images/grinningFace.png";
    // emoji.setAttribute("style", "z-index: 1;");
    // document.getElementById("face").appendChild(emoji);
    document.getElementById("winCounter").innerHTML = winCount;
    setTimeout(function() {
      alert("You Won ! The word is: " + currentWord);
      startGame();
    }, 1000);
  } else if (guessesLeft == 0) {
    lossCount++;
    // logic to change to horse pic and play song here
    // emoji.src = "./assets/images/dizzyFace.png";
    // emoji.setAttribute("style", "z-index: 1;");
    // document.getElementById("face").appendChild(emoji);

    alert("You lost! The correct word was: " + currentWord);
    document.getElementById("lossCount").innerHTML = lossCount;
    document.getElementById("wrongGuesses").innerHTML = "  ";

    startGame();
  }
}

//

//calling functions for main game
//start game
startGame();
//Register key clicks
document.onkeyup = function(event) {
  let letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
  console.log("letterGuessed in the on key up function: ", letterGuessed);
};
