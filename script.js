import {translateString} from './morse-module.js'

// handles the blinking animation on page//
let i = 0;
let text = [`- .-. .- -. ... .-.. .- - --- .-.`]; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

const typewriter = () => {
    document.getElementById('title').innerHTML = text[0].substring(0, i) + "<span>\u25ae</span>";

    if (i++ != text[0].length) {
        setTimeout(typewriter, speed);
    }
}

window.addEventListener('load', typewriter);

//

const userInput = document.getElementById('userInput');

const output = document.getElementById('output');

const errorMessage = document.getElementById('errorMessage');

//event listener that converts user input to morse/english depending on user input.

  const engRegex = /[a-zA-Z]/gm;

  const morseRegex = /[-._\/]/gm;

  const numRegex = /[0-9]/;

  const specRegex = /[~`!#$%\^&*+=\\[\]\';,(){}|\\":<>\?]/;

userInput.addEventListener("keyup", (e) => {
  
  let string = userInput.value;

  output.innerText = "";

  errorMessage.innerText = '';

  if (e.key.match(numRegex) || e.key.match(specRegex)) {
    errorMessage.innerText = 'Invalid input. Only use alphabet characters or morse code.'
    return;
  }

  if (string.match(engRegex) && string.match(morseRegex)) {
    errorMessage.innerText =
      "Error! You are only able to translate one language at a time.";
    return;
  }

  if (string.match(morseRegex)) {
    const translatedString = translateString(string, "/", " ", "", " ");
    output.innerText = translatedString;
  } else if (string.match(engRegex)) {
    const translatedString = translateString(string, " ", "", " ", " / ");
    output.innerText = translatedString;
  }
});


