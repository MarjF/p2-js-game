import categories from "./data.js";

let currentLogoIndex = 13;
const logoElement = document.getElementById("logo");
const hintElement = document.getElementById("hint");
const answerElement = document.getElementById("answer");
const shuffledLogo = shuffleLogo(categories);

export {
  currentLogoIndex,
  logoElement,
  hintElement,
  answerElement,
  shuffledLogo,
};


//FUNCTION TO SHUFFLE THE CATEGORY USING FOR LOOP
export function shuffleLogo(categories) {
  const c = Array.from(categories);
  const x = [];

  for (let i = 0; i < categories.length; i++) {
    const j = Math.floor(Math.random() * (categories.length - i)); // Generate a random index within the remaining categories
    x.push(c[j]); // Add the category at the random index to the shuffled array
    c.splice(j, 1); // Remove the category from the original array
  }
  return x;
}

//FUNCTION TO LOAD THE NEXT CATEGORY/IMAGE AND TEXT HINT
export default function loadNextLogo() {
  const logo = shuffledLogo[currentLogoIndex];
  const hint = shuffledLogo[currentLogoIndex];
  logoElement.src = logo.image;
  hintElement.innerHTML = hint.p;
  answerElement.value = "";
}

export function currentLogoIncrement() {
  currentLogoIndex++;
}