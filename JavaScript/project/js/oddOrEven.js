function check() {
    const simpleNumber = document.getElementById("num1");
    const Print = document.getElementById("print");

    const numberValue = simpleNumber.value;

    if(numberValue % 2 === 0){
        Print.innerHTML = numberValue + " is Even Number.";
    }
    else{
        Print.innerHTML = numberValue + " is Odd Number.";
    }
    // else if (numberValue < 0) {
    //     Print.innerHTML = numberValue + " is Negative Number.";
    // }
    // else{
    //     Print.innerHTML = "Input Field Is Empty.";
    // }
}