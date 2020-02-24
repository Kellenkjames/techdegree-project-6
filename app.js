// Globals
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('.phrase');

const missed = 0;
const startGame = document.querySelector('.btn__reset');
const startOverlay = document.querySelector('#overlay');
const phrases = 
[ 
    'If you spend too much time thinking about a thing, you\'ll never get it done', 
    'Do not pray for an easy life, pray for the strength to endure a difficult one', 
    'I fear not the man who has practices 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times', 
    'Real living is living for others', 
    'The successful warrior is the average man, with laser-like focus'  
]

// Return a random phrase from the array
const getRandomPhraseAsArray = arr => {
    // Randomly choose a phrase from the phrases array 
    return phrases[Math.floor(Math.random() * phrases.length)].toLowerCase().split("");
}

// Call the function and pass phrases array to it
getRandomPhraseAsArray(phrases);

// Value returned by getRandomPhraseAsArray
const phraseArray = getRandomPhraseAsArray(phrases);

// Adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0; i < phraseArray.length; i++) {
        if (phraseArray.length > 0) {
            let text = phraseArray[i];
            const ul = document.getElementById('phrase');
            const li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
            if (phraseArray[i].trim()) {
                // is a letter and not a space
                li.classList.add('letter');
            } 
        }
    }
}
// Pass new split array as argument
addPhraseToDisplay(phraseArray); 

// Check if a letter is in the phrase
const checkLetter = button => {
    
    // Get all of the elements with a class of “letter” 
    const checkLetter = document.querySelectorAll('.letter');
    const match = null;
    
    // Loop through collection
    for (let i = 0; i < checkLetter.length; i++) {
        
        console.log(checkLetter[i]);
        
        // Check if they match the letter in the button the player has chosen.
        if (checkLetter[i].textContent === '') {
            // Add class of "show" to ALL list items that have the same value. 
            checkLetter[i].classList.add('show');
        } else {
            return null;
        }
    }
};

// Listen for the start game button to be pressed
startGame.addEventListener('click', () => {
    // Hide the start screen overlay 
    startOverlay.style.display = 'none';
});

// Listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    
    const letterChosen = e.target.textContent;
    const button = e.target;
    const keyrow = document.querySelectorAll('.keyrow');
    
    // If clicked element is our button, add class and disable button
    if (button.closest('.keyrow')) {
        button.classList.add('chosen');
        button.disabled = true;
    }
    // If clicked element is outside of keyboard, make sure we remove styles of "chosen"
    for (let i = 0; i < keyrow.length; i++) {
        if (button === keyrow[i]) {
            console.log(button)
            console.log(keyrow[i]);
            keyrow[i].classList.remove('chosen');
        }  
    }  
    const letterFound = checkLetter(button);
    // Call function
    letterFound;  
});







