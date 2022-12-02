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

//event listener that converts user input to morse/english depending on user input.

  const engRegex = /[a-zA-Z]/gm;

  const morseRegex = /[-._\/]/gm;

  const numRegex = /[0-9]/gm;

  const specRegex = /[~`!#$%\^&*+=\-\[\]\';,(){}|\\":<>\?]/gm;

userInput.addEventListener("keyup", (e) => {
  
  output.innerText = "";

  let string = userInput.value;

  if (numRegex.test(e.key) || specRegex.test(e.key)) {
    console.log(e.key);
    output.innerText =
      'Please only use alphabetical letters or ".", "/", "-" or "_".';
    return;
  }
  
  if (morseRegex.test(string)) {
    console.log('a');
    const translatedString = translateString(string, "/", " ", "", " ");
    output.innerText = translatedString;
  } else if (engRegex.test(string)) {
    console.log('b');
    const translatedString = translateString(string, " ", "", " ", " / ");
    output.innerText = translatedString;
  }

  if (engRegex.test(string) && morseRegex.test(string)) {
    console.log("nuts");
    output.innerText =
      "Error! You are only able to translate one language at a time.";
    return;
  }
});


