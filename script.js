



$(document).ready(function(){

//Set play words array
var wordsArr = [
  "m",
  "b",
  "h",
  "l"
];

//Pick a word
var randomNr = getNmbr(0,wordsArr.length-1);
var randomWord = wordsArr[randomNr];

//Start with click of the button
$("#checkBtn").click(function(){

//Compare user entry against picked word
var userWord = document.getElementById("wordField").value;
if (userWord == randomWord){
  alert("LINGO");
} else {
  alert("FOUT. Probeer het nog eens")
}

//Insert random word in html field
document.getElementById("randomWord").innerHTML = randomWord; 
});

//End of document ready
});


// Create random number
function getNmbr(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}