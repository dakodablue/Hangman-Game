// Globals
// ===============
// Create an array of words
const word = ['tired', 'java', 'oakland', 'software', 'javascript', 'vanilla', 'jquery', 'code', 'html', 'node'];
// Choose random word
var randNum = Math.floor(Math.random() * word.length);
var chooseWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];

//Dom Manipulation
var docUnderScore = document.getElementsByClassName('underScore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

//Main
//===============================
// Create underscores based on length of word
var generateUnderscore = () => {
    for (var i = 0; i < chooseWord.length; i++) {
        underScore.push('_');
    }
    return underScore;

}

// Get users guesses
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    // if users guess is right
    if (chooseWord.indexOf(keyword) > -1) {
        // add to right words array
        rightWord.push(keyword);
        // replace underscore with right varter
        underScore[chooseWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;
        // Check to see if user word matches guesses
        if (underScore.join('') == chooseWord) {
            alert('You Win');
        }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }
});
docUnderScore[0].innerHTML = generateUnderscore().join(' ');