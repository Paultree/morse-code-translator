let i = 0;
let text = [`- .-. .- -. ... .-.. .- - --- .-.`]; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

typewriter = () => {
    document.getElementById('title').innerHTML = text[0].substring(0, i) + "<span>\u25ae</span>";

    if (i++ != text[0].length) {
        setTimeout(typewriter, speed);
    }
}

window.addEventListener('load', typewriter);