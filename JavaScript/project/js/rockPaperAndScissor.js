let yourScore = 0;
let computerScore = 0;

function rockPaperScissor(userChoice) {
    const computerChoice = randomNumber();
    const yourPara = document.getElementById("yourScore");
    const computerPara = document.getElementById("computerScore");
    const message = document.getElementById("msg");

    let msg;

    if (userChoice === computerChoice) {
        msg = "😑 Draw 😑";
    } else if (userChoice === 0) {
        if (computerChoice === 1) {
            msg = "😬 Computer Won 😬";
            ++computerScore;
        } else {
            msg = "🏆 You Win 🏆";
            ++yourScore;
        }
    } else if (userChoice === 1) {
        if (computerChoice === 2) {
            msg = "😬 Computer Won 😬";
            ++computerScore
        } else {
            msg = "🏆 You Win 🏆";
            ++yourScore;
        }
    } else {
        if (computerChoice === 0) {
            msg = "😬 Computer Won 😬";
            ++computerScore;
        } else {
            msg = "🏆 You Win 🏆";
            ++yourScore;
        }
    }

    // if (computerScore === 5) {
    //     msg = "😱 Computer Win Game 😱";
    // }else if(yourScore === 5){
    //     msg = "🎉 You Win Game 🎉";
    // }


    yourPara.innerHTML = "Your Score:- " + yourScore;
    computerPara.innerHTML = "Computer Score:- " + computerScore;
    message.style.display = "block";
    message.innerHTML = msg;
}

function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}