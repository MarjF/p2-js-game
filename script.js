import loadNextLogo from "./loadNextLogo.js";
import checkAnswer from "./checkAnswer.js";
import { prompAlert } from "./alert.js";
import { answerElement } from "./loadNextLogo.js";

const prompHome = document.querySelector(".prompHome");
const close = document.querySelector(".promp .close");
const close2 = document.querySelector(".prompHome .close");

//FUNCTION TO CLEAR THE INPUT BOX
window.erase = function () {
  document.getElementById("answer").value = "";
};

//NEXT FUNCTION ON PROMPT MESSAGE
window.next = function () {
  loadNextLogo();
  prompAlert.classList.remove("show");
};

let btnclicked = document.querySelector(".btn");
btnclicked.addEventListener("click", function () {
  let audio = new Audio("assets/clicked.mp3");
  audio.play();
});

//EVENT LISTENER FOR CLOSE/SPAN ON ALERT MESSAGE ONCE CLICKED
close.addEventListener("click", () => {
  prompAlert.classList.remove("show");
});

close2.addEventListener("click", () => {
  prompHome.classList.remove("show");
});

//EVENT LISTENER FOR SUBMIT ONCE CLICKED
const submit = document.getElementById("submit");
submit.addEventListener("click", checkAnswer);

//EVENT LISTENER FOR SUBMIT ONCE PRESSED ENTER
answerElement.addEventListener("keydown", handleKey);
function handleKey(event) {
  if (event.key === "Enter") {
    checkAnswer();
    answerElement.blur();
  }
}

const yesHome = document.querySelector(".btnYesHome");
const yesRestart = document.querySelector(".btnYesRestart");
const home = document.getElementById("home");

//EVENT LISTENER FOR RETURN TO HOME
home.addEventListener("click", function () {
  yesRestart.style.display = "none";
  yesHome.style.display = "inline-block";
  message.innerHTML = "ARE YOU SURE YOU WANT TO EXIT?";
  prompHome.classList.add("show");
});

//IF CX CHOOSED TO EXIT THE GAME, PAGE WILL REDIRECT TO HOME.HTML

yesHome.addEventListener("click", function () {
  window.location.href = "index.html";
});

const noHomeRestart = document.querySelector(".btnNo");
noHomeRestart.addEventListener("click", function () {
  prompHome.classList.remove("show");
});

//IF CX CHOOSED TO RESTART THE GAME, PAGE WILL REDIRECT TO INDEX.HTML
yesRestart.addEventListener("click", function () {
  window.location.href = "game.html";
});

//EVENT LISTENER FOR RESTART
const restart = document.getElementById("restart");
let message = document.querySelector(".prompHome .textMessage");
restart.addEventListener("click", function () {
  message.innerHTML = "ARE YOU SURE YOU WANT TO RESTART THE GAME?";
  yesRestart.style.display = "inline-block";
  yesHome.style.display = "none";
  prompHome.classList.add("show");
});
