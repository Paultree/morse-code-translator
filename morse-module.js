// A to Z in Morse Code
export const translator = {
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
export function splitSentence(input, seperator) {
   return input.toUpperCase().split(seperator);
}



//splits each word in first array word into array of letters --> ie. [[s,p,a,g,h,e,t,t,i], [m,o,n,s,t,e,r]]//
export function splitWord(input,seperator) {
   return input.map(word => {
      return word.split(seperator);
   })
}

//translates each letter in array to morse//
export function toMorse(input) {
   return input.map((letter) => {
     return translator[letter];
   });   
}

//translates each morse code in array to letter// input has to be an array//
export function toEnglish(input) {
   return input.map((morse) => {
      return Object.keys(translator).find(key => translator[key] === morse);
   })
}

export function toOther(input) {
   return input.map((character) => {
      if (character.match(/[a-zA-Z]/gm)) {
         return translator[character];
      } else {
         return Object.keys(translator).find(
           (key) => translator[key] === character
         );
      }
   })
}

//ENGLISH TO MORSE CODE//
export function translateEnglishToMorse(input) {
   let sentenceArr = splitSentence(input, ' ');

   let nestedLetterArr = splitWord(sentenceArr, '');
   
   let translatedSentence = [];

   for (let word of nestedLetterArr) {
      let translatedWord = toMorse(word);
      translatedSentence.push(translatedWord.join(' '));
   }
   
   return translatedSentence.join('/');
}

//"... .--. .- --. .... . - - ../-- --- -. ... - . .-.";// spaghetti monster

//MORSE CODE TO ENGLISH//
export function translateMorseToEnglish(input) {
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
export function translateString(input, sentenceSeperator, letterSeperator, letterJoiner, sentenceJoiner) {
   let sentenceArr = splitSentence(input, sentenceSeperator);

   let nestedLetterArr = splitWord(sentenceArr, letterSeperator);

   let translatedSentence = [];

   for (let word of nestedLetterArr) {
     let translatedWord = toOther(word);
     translatedSentence.push(translatedWord.join(letterJoiner));
   }
   return translatedSentence.join(sentenceJoiner);
}
