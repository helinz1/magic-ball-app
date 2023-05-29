const phraseElement = document.getElementById('phrase');

// Array of phrases
const phrases =
   [
      "Yes",
      "No",
      "I don't think so",
      "Definitely",
      "You should ",
      "You shouldn't"
   ];

// Function to be called on button click
function getPhrase() {
   // Get a random number from 1 to the length of phrases array length
   let randomPhraseIndex = Math.floor(Math.random() * phrases.length);
   console.log(randomPhraseIndex);

   // Set the phrase element text to the string found at phrases
   phraseElement.innerText = phrases[randomPhraseIndex];
}