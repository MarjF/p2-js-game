import { currentLogoIndex } from "./loadNextLogo.js";
import { life, score } from "./checkAnswer.js";

export const prompAlert = document.querySelector(".prompAlert");

//FUNCTION FOR ALERT MESSAGE ON IF ELSE CONDITION
export default function alertMessage(inputAnswer, correctAnswer, callback) {
  let message = document.querySelector(".textMessage");
  let textParagraph = document.querySelector(".textParagraph");
  let btnNext = document.querySelector(".btnNext");
  let i = document.querySelector(".coins");

  //FUNCTIONS FOR AUDIO
  function correctAudio() {
    let audio = new Audio("assets/correct_answer.mp3");
    audio.volume = "0.3";
    audio.play();
  }

  function wrongAudio() {
    let audio = new Audio("assets/wrong_answer.mp3");
    audio.volume = "0.3";
    audio.play();
  }

  function iconCorrectRemove() {
    i.classList.remove("fa-solid", "fa-face-sad-tear");
    i.classList.remove("fa-solid", "fa-question");
    i.classList.remove("fa-regular", "fa-face-sad-cry");
  }
  function iconWrongRemove() {
    i.classList.remove("fa-solid", "fa-coins");
  }

  function correct() {
    //PROMPT IF THE ANSWER IS CORRECT
    correctAudio();
    message.innerHTML = "Congratulations!";
    textParagraph.innerHTML = "You got it right.";
    btnNext.innerHTML = "NEXT";
    prompAlert.classList.add("show");
    i.style.color = "#f9cd2f";
    iconCorrectRemove();
    i.classList.add("fa-solid", "fa-coins");
  }
  function blankAnswer() {
    //PROMPT IF INPUT BOX WAS BLANKED UPON SUBMIT
    wrongAudio();
    message.innerHTML = "Please type your answer.";
    textParagraph.innerHTML = "You can do it! :)";
    btnNext.innerHTML = "OK";
    prompAlert.classList.add("show");
    iconWrongRemove();
    i.classList.remove("fa-solid", "fa-face-sad-tear");
    i.style.color = "#ff0000";
    i.classList.add("fa-solid", "fa-question");
    i.classList.remove("fa-regular", "fa-face-sad-cry");
  }
  function incorrect() {
    //PROMPT IF THE ANSWER IS INCORRECT
    wrongAudio();
    message.innerHTML = "Your answer is wrong.";
    textParagraph.innerHTML = "Please try again!";
    btnNext.innerHTML = "OK";
    i.style.color = "#ff0000";
    prompAlert.classList.add("show");
    iconWrongRemove();
    i.classList.remove("fa-solid", "fa-question");
    i.classList.add("fa-regular", "fa-face-sad-tear");
  }
  function gameOver() {
    //PROMPT IF THE GAME IS OVER (LIFE <=0)
    wrongAudio();
    document.getElementById("score").innerHTML = score;
    const finalScore = "Your final score is: " + "<b>" + score + "<b>";
    message.innerHTML = "Sorry, game over!";
    textParagraph.innerHTML = `The game will restart automatically. <br>${finalScore}`;
    i.style.color = "#ff0000";
    prompAlert.classList.add("show");
    iconWrongRemove();
    i.style.color = "ff0000";
    i.classList.remove("fa-solid", "fa-question");
    i.classList.remove("fa-regular", "fa-face-sad-tear");
    i.classList.add("fa-regular", "fa-face-sad-cry");
    btnNext.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
  function finishedGame() {
    //PROMPT IF THE GAME HAS BEEN FINISHED
    correctAudio();
    document.getElementById("score").innerHTML = score;
    const finalScore = "Your final score is: " + "<b>" + score + "<b>";
    message.innerHTML = "Congratulations! " + "\u2764";
    textParagraph.innerHTML = `You finished the game. <br> ${finalScore}`;
    btnNext.innerHTML = "FINISHED";
    prompAlert.classList.add("show");
    i.style.color = "#1b243b";
    iconCorrectRemove();
    i.classList.remove("fa-solid", "fa-coins");
    i.classList.add("fa-solid", "fa-hands-clapping");
    btnNext.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  //CHECKING IF INPUT ANSWER IS BLANK, INCORRECT OR CORRECT
  if (inputAnswer === "") {
    blankAnswer();
    if (life <= 1) {
      gameOver();
      life = 3;
      score = 0;
      document.getElementById("life").innerHTML = life;
      document.getElementById("score").innerHTML = score;
    }
    callback;
  } else if (inputAnswer == correctAnswer) {
    correct();
    if (currentLogoIndex >= 14) {
      finishedGame();
    }
    callback;
  } else if (inputAnswer !== correctAnswer) {
    incorrect();
    if (life <= 1) {
      gameOver();
      life = 3;
      score = 0;
      document.getElementById("life").innerHTML = life;
      document.getElementById("score").innerHTML = score;
    }
  }
}
