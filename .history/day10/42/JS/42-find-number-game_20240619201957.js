let numberInput =document.querySelector("#num");
let guessButton = document.querySelector(".btn-guess");
let startButton = document.querySelector(".btn-start");
let resultLabel = document.querySelector("#result");

function startGame(){
 const createRandomNumber = (min,max) => {Math.floor(Math.random()*(max-min+1))+min;

    console.log(createRandomNumber(1,100));
 }
}