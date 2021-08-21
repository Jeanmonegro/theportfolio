let word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.").toUpperCase();
console.log(word);
let revealedLetters = new Array(word.length);

revealedLetters.fill(false);

const maxStrikes = 6;
let strikes = 0;
let strikeLetters = new Array(maxStrikes);

drawWordProgress();

function drawGallows(){
    document.getElementById("gallows").src ="/static/hangman-image/strike-"+strikes+".png";
}

function drawStrikeLetters(){
    let letter = document.getElementById("usr-input").value;
    let strikeLocation = document.getElementById("strikes");
    strikeLocation.innerHTML = letter;
}

function drawWordProgress(){
    let wordToRender = "";
    for(let i=0; i < revealedLetters.length; i++){
        if(revealedLetters[i]){
            console.log("index: " + i + " was true");
            wordToRender += word[i];
        }else {
            console.log("index: " + i + " was false");
            wordToRender += " _ ";
        }
        if(wordToRender == word){
            alert("Congratulations! Player 2 won");
            console.log("Player 2 wins")
        }
    }
    document.getElementById("word").innerHTML = wordToRender;
}

document.getElementById("sub-btn").addEventListener("click", processGuess);

function processGuess(event){
    event.preventDefault();
    if(strikes < maxStrikes){
        let guess = document.getElementById("usr-input").value.toUpperCase();
        let guessCorrect = false;
        for(let i=0; i < word.length; i++){
            if( guess == word[i]){
                revealedLetters[i] = true;
                guessCorrect = true;
            } 
        }
        if(guessCorrect){
            console.log("The letter was in our word");
            drawWordProgress();
        } else {
            console.log("the letter was not found");
            strikes++;
            drawStrikeLetters();
            drawGallows();
        }
    }else 
        alert("Player 2 loses");
}
