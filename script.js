let i = 0;
let text = "- .-. .- -. ... .-.. .- - --- .-."; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    
  if (i < text.length) {
    document.getElementById("title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();