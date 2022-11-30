import {translator, splitSentence, splitWord, toMorse, toEnglish, translateString} from './morse-module.js'

import {appendText} from './dom-modules.js';

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

const btn = document.getElementById('button');

const output = document.getElementById('output');

//event listener that converts user input to morse/english depending on user input.
btn.addEventListener('click', (e)=> {
    e.preventDefault();
    let string = userInput.value;
    if (string.match(/[-._ ]/gm)) {
        const translatedString = translateString(
          string,
          '/',
          ' ',
          '',
          ' '
        );
        console.log(translatedString);
        appendText(output, 'p', translatedString);
    }

})

