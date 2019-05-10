



$(document).ready(function(){

//Set play words array
var wordsArr = [
  "maart",
  "boter",
  "ander",
  "pakje",
  "toast",
  "lingo",
  "chips",
  "kroeg"
];

//Pick a word
var randomNr = getNmbr(0,wordsArr.length-1);
var randomWord = wordsArr[randomNr].toUpperCase();
var wordHistory = "";

console.log(randomWord);

//Start with click of the button
$("#checkBtn").click(function(){

//Assign user entry to variable
var userWord = document.getElementById("wordField").value.toUpperCase();
console.log(userWord);

//Compare user entry against random word
// Check userword letter by letter against the rando word
var x = 5; //Set wordlength
var spanId = "";
var counter = 0;
for (y=0; y < x; y++) {
if (randomWord[y] == userWord[y]) {
  spanId += "letter" + y;
  document.getElementById(spanId).innerHTML = userWord[y];
  document.getElementById(spanId).style.background = "green";
  document.getElementById("wordField").value ='';
  spanId = "";
} else if (randomWord.includes(userWord[y])) {
  spanId += "letter" + y;
  document.getElementById(spanId).innerHTML = userWord[y];
  document.getElementById(spanId).style.background = "rgb(0, 204, 255)";
  document.getElementById("wordField").value ='';
  spanId = "";
} else {
  spanId += "letter" + y;
  document.getElementById(spanId).innerHTML = userWord[y];
  document.getElementById(spanId).style.background = "red";
  document.getElementById("wordField").value ='';
  spanId = "";
}
};
//Show previous words
var solutionEnd = $(".solution");
document.getElementById("solutionHistory").innerHTML = solutionEnd;
;

});

//End of document ready
});

// Create random number
function getNmbr(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}