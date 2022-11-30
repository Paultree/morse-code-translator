## MVP

-   Create a user interface that allows the user to either input some English text or some Morse Code - [ x ]
-   Create JS functions that would allow the user to:

    -   translate their English text into Morse Code - [ x ]
    -   Morse Code into English text - [ x ]

-   Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters) - [ x ]

-   Bonus: Handle other characters as well - []
-   Bonus: Detect if a piece of text is english or morse and translate accordingly - []

-   Split your code between data, logic functions and dom functions - [ x ]
-   Develop unit tests for all of your logic functions - []
-   Explore and discover edge cases in your code to further develop your tests - [ x ]

28/11/2022
- Implemented basic HTML layout
- Implemented CSS layout
- Placed some animation.

29/11/2022
- Created functions responsible for translating an input sentence in both english and morse to morse and english respectively.
- Created a module responsible for storing the translating functions.
- Created an object that stores key value pairs in the format of english letter key : morse code value.
- Updated the placeholder text in textarea to be the same as https://morsecode.world/international/translator.html

30/11/2022
- Created dom-modules.js file which houses functions for handling DOM manipulations.
- Added basic functionality to 'translate' button. 