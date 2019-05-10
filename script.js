



$(document).ready(function(){

//Set play words array
let wordsArr = [
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
let randomNr = getNmbr(0,wordsArr.length-1);
let randomWord = wordsArr[randomNr].toUpperCase();
let wordHistory = "";

console.log(randomWord);

//Start with click of the button
$("#checkBtn").click(function(){

//Assign user entry to variable
let userWord = document.getElementById("wordField").value.toUpperCase();

//Compare user entry against random word
// Check userword letter by letter against the rando word
let x = 5; //Set wordlength
let spanId = "";
let y = 0;
let winCounter = 0;
for (y=0; y < x; y++) {  
if (userWord[y] == undefined) { //Check if user entered a 5 letter word
  alert("Vergeet niet om 5 letters in te voeren!!");
  document.getElementById("userField").value = '';
  break;
}
if (randomWord[y] == userWord[y]) {
  spanId += "letter" + y;
  document.getElementById(spanId).innerHTML = userWord[y];
  document.getElementById(spanId).style.background = "green";
  document.getElementById("wordField").value ='';
  spanId = "";
  winCounter++;
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

if (winCounter == 5) {
  let audio = new Audio("win.mp3");
  audio.play();
  setTimeout(function() { 
    alert("JOEPIE, GEWONNEN!!!"); }, 1000);;
}

//Show previous words
let solutionEnd = $(".solution");
document.getElementById("solutionHistory").innerHTML = solutionEnd;
;

});

//End of document ready
});

// Create random number
function getNmbr(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}