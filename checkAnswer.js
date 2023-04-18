import alertMessage from "./alert.js";
import loadNextLogo, {
  currentLogoIndex,
  shuffledLogo,
  currentLogoIncrement,
} from "./loadNextLogo.js";
import { answerElement } from "./loadNextLogo.js";

export let life = 3;
export let score = 0;
let level = currentLogoIndex + 1;
const newLevel = "Level: " + level;
document.getElementById("level").innerHTML = newLevel;
document.getElementById("life").innerHTML = life;
document.getElementById("score").innerHTML = score;

export default function checkAnswer(event) {
  const logo = shuffledLogo[currentLogoIndex];
  let answer = answerElement.value.toLowerCase();
  const finalAnswer = answer.replace(/[^a-zA-Z0-9 ]/g, "");
  alertMessage(finalAnswer, logo.answer);

  if (finalAnswer == logo.answer) {
    currentLogoIncrement();
    score++;
    level++;
    life = 3;
    const newLevel = "Level: " + level;
    const newHint = "";
    document.getElementById("level").innerHTML = newLevel;
    document.getElementById("score").innerHTML = score;
    document.getElementById("life").innerHTML = life;
    document.getElementById("hint").innerHTML = newHint;
  } else if (finalAnswer !== logo.answer) {
    life--;
    document.getElementById("life").innerHTML = life;
    document.getElementById("answer").value = "";
  }
}
loadNextLogo();
