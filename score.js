// Iteration 8: Making scoreboard functional 
var score = document.getElementById("score-board");
score.innerHTML= localStorage.getItem("score")

var PlayAgain = document.getElementById("play-again-button")
PlayAgain.addEventListener("click",()=>{
    window.location.href="./index.html"
})