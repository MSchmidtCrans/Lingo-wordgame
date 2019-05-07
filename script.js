



$(document).ready(function(){

//Set play words array
var wordsArr = [
  "motor",
  "beker",
  "pekel",
  "winst"
];

//Start with click of the button
$("#checkBtn").click(function(){

//Pick a word
var randomNr = getNmbr(0,wordsArr.length-1);
var randomWord = wordsArr[randomNr];
console.log(randomWord);

//Insert random word in html field
document.getElementById("randomWord").innerHTML = randomWord; 
});

});


// Create random number
function getNmbr(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}