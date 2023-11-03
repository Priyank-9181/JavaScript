const randomNumberValue = randomNumber(0, 26);
const randomAlphabetValue = randomAlphabet();
let score = 0;
let attempts = 0;

function check() {
    const inputAlphabet = document.getElementById("alphabet").value;
    const scorePrint = document.getElementById("score");
    const wrongPrint = document.getElementById("wrong");
    const message = document.getElementById('msg');
    const guessButton = document.getElementById("guessButton");
    const resetButton = document.getElementById("resetButton");

    const alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];


    const upperCaseAlphbet = inputAlphabet.toUpperCase();
    const userAlphabetValue = alphabet.indexOf(upperCaseAlphbet);

    tooBig = randomNumberValue + 12;
    stillBig = randomNumberValue + 7;
    nearBig = randomNumberValue + 4;
    tooSmall = randomNumberValue - 12;
    stillSmall = randomNumberValue - 7;
    nearSmall = randomNumberValue - 4;

    let msg = "";
    attempts++;

    if (inputAlphabet == "") {
        msg = "🙏 Enter Alphabet 🙏";
        attempts--;
    } else if (userAlphabetValue > tooBig) {
        msg = "😑Too Big Alphabet 😑";
    } else if (userAlphabetValue > stillBig) {
        msg = "😬 Still Big Alphabet 😬";
    } else if (userAlphabetValue > nearBig) {
        msg = "😟 Big But Near The Alphabet 😟";
    } else if (userAlphabetValue > randomNumberValue) {
        msg = "😖 Still Big But Close 😖";
    } else if (userAlphabetValue < tooSmall) {
        msg = "😑Too Small Alphabet 😑";
    } else if (userAlphabetValue < stillSmall) {
        msg = "😬 Still Small Alphabet 😬";
    } else if (userAlphabetValue < nearSmall) {
        msg = "😟 Small But Near The Alphabet 😟";
    } else if (userAlphabetValue < randomNumberValue) {
        msg = "😖 Still Small Alphabet But Close 😖";
    } else {
        msg = "🏆 You Win 🏆";
        message.style.display = "block";
        message.innerHTML = msg;
        guessButton.style.display = "none";
        resetButton.style.display = "block";
        score = 26 - attempts;
        scorePrint.innerHTML = "Score:- " + score;
    }

    message.style.display = "block";
    message.innerHTML = msg;
    wrongPrint.innerHTML = "Wrong Guess:- " + attempts;
}

function reset() {
    const inputAlphabet = document.getElementById("alphabet");
    const scorePrint = document.getElementById("score");
    const wrongPrint = document.getElementById("wrong");
    const message = document.getElementById('msg');
    const guessButton = document.getElementById("guessButton");
    const resetButton = document.getElementById("resetButton");

    inputAlphabet.innerHTML = "";
    scorePrint.innerHTML = "Score:- 0";
    wrongPrint.innerHTML = "Wrong Guess:- 0";
    message.style.display = "none";
    resetButton.style.display = "none";
    guessButton.style.display = "block";
}


function randomAlphabet() {
    const alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];

    let a = alphabet[randomNumberValue];

    return a;
}

function randomNumber(min, max) {
    let random = Math.floor(Math.random() * (max - min)) + min;
    return random;
}