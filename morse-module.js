// A to Z in Morse Code
const translator = {
   "A": ".-",
   "B": "-...",
   "C": "-.-.",
   "D": "-..",
   "E": ".",
   "F": "..-.",
   "G": "--.",
   "H": "....",
   "I": "..",
   "J": ".---",
   "K": "-.-",
   "L": ".-..",
   "M": "--",
   "N": "-.",
   "O": "---",
   "P": ".--.",
   "Q": "--.-",
   "R": ".-.",
   "S": "...",
   "T": "-",
   "U": "..-",
   "W": ".--",
   "X": "-..-",
   "Y": "-.--",
   "Z": "--.."
}


//splits sentence into array of words//
function splitSentence(input, seperator) {
   return input.toUpperCase().split(seperator);
}

//splits each word in first array word into array of letters --> ie. [[s,p,a,g,h,e,t,t,i], [m,o,n,s,t,e,r]]//
function splitWord(input,seperator) {
   return input.map(word => {
      return word.split(seperator);
   })
}

//translates each letter in array to morse//
function toMorse(input) {
   return input.map((letter) => {
     return translator[letter];
   });   
}

//translates each morse code in array to letter// input has to be an array//
function toEnglish(input) {
   return input.map((morse) => {
      return Object.keys(translator).find(key => translator[key] === morse);
   })
}

//ENGLISH TO MORSE CODE//
function translateEnglishToMorse(input) {
   let sentenceArr = splitSentence(input, ' ');

   let nestedLetterArr = splitWord(sentenceArr, '');
   
   let translatedSentence = [];

   for (let word of nestedLetterArr) {
      let translatedWord = toMorse(word);
      translatedSentence.push(translatedWord.join(' '));
   }
   return translatedSentence.join('/')
}

//"... .--. .- --. .... . - - ../-- --- -. ... - . .-.";// spaghetti monster

//MORSE CODE TO ENGLISH//
function translateMorseToEnglish(input) {
   let sentenceArr = splitSentence(input, '/');
   
   let nestedLetterArr = splitWord(sentenceArr, " ");

   let translatedSentence = [];

   for (let word of nestedLetterArr) {
     let translatedWord = toEnglish(word);
     translatedSentence.push(translatedWord.join(""));
   }
   return translatedSentence.join(' ');
}

//For now, keep the above two functions intact to not forget how it works. However, we will create 
// a singular function that takes in a few more parameters so that it basically runs similarly to both the above.
function translateUserInput(input, sentenceSeperator, letterSeperator, letterJoiner, sentenceJoiner) {
   let sentenceArr = splitSentence(input, sentenceSeperator);

   let nestedLetterArr = splitWord(sentenceArr, letterSeperator);

   let translatedSentence = [];

   for (let word of nestedLetterArr) {
     let translatedWord = toEnglish(word);
     translatedSentence.push(translatedWord.join(letterJoiner));
   }
   return translatedSentence.join(sentenceJoiner);
}