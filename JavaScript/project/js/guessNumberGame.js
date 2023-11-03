let randomNumberValue = randomNumber(1, 20);
let score = 0;
let attempts = 0;

function guessNumber() {
    const input = document.getElementById("num1");
    const message = document.getElementById("msg");
    const wrongPrint = document.getElementById("wrong");
    const scorePrint = document.getElementById("score");
    const resetButton = document.getElementById("resetButton");
    const guessButton = document.getElementById("guessButton");

    const inputValue = input.value;


    const bigNumber = randomNumberValue + 5;
    const stillBigNumber = randomNumberValue + 3;
    // const stillBigButClose = randomNumberValue + 2;
    const smallNumber = randomNumberValue - 5;
    const stillSmallNumber = randomNumberValue - 3;
    // const stillSmallButClose = randomNumberValue - 2;

    attempts++;

    let msg = "";

    if (inputValue > bigNumber) {
        msg = "&#128531 Big Number &#128531";
    } else if (inputValue > stillBigNumber ) {
        msg = "&#128532 Still Big Number &#128532";
    } else if (inputValue > randomNumberValue  ) {
        msg = "&#128533 Still Big But Close &#128533";
    } else if (inputValue < smallNumber  ) {
        msg = "&#128531 Small Number &#128531";
    } else if (inputValue < stillSmallNumber  ) {
        msg = "&#128532 Still Small Number &#128532";
    } else if (inputValue < randomNumberValue  ) {
        msg = "&#128533 Still Small But Close &#128533";
    } else {
        msg = "&#128562 Win Game &#128562";
        message.style.display = "block";
        message.innerHTML = msg;
        guessButton.style.display = "none";
        resetButton.style.display = "block";
        score = 20 - attempts;
        scorePrint.innerHTML = "Score:- " + score;
    }

    
    wrongPrint.innerHTML = "Wrong:- " + attempts;
    message.style.display = "block";
    message.innerHTML = msg;
}

function reset() {
    const input = document.getElementById("num1");
    const message = document.getElementById("msg");
    const attempts = document.getElementById("wrong");
    const scorePrint = document.getElementById("score");
    const resetButton = document.getElementById("resetButton");
    const guessButton = document.getElementById("guessButton");

    score = 0;
    attempts = 0;

    input.innerHTML = "";
    message.innerHTML = "";
    message.style.display = "none";
    attempts.innerHTML = "Wrong:- " + attempts;
    scorePrint.innerHTML = "Score:- " + score;
    resetButton.style.display = "none";
    guessButton.style.display = "block";
}

function randomNumber(min, max) {
    let random = Math.floor(Math.random() * (max - min)) + min;
    return random;
}