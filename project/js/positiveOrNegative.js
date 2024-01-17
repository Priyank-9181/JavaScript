function check() {
    const simpleNumber = document.getElementById("num1");
    const Print = document.getElementById("print");

    const numberValue = simpleNumber.value;

    if(numberValue > 0){
        Print.innerHTML = numberValue + " is Positive Number.";
    }
    else if(numberValue === "0"){
        Print.innerHTML = "This Input Value is " + numberValue + ".";
    }
    else if (numberValue < 0) {
        Print.innerHTML = numberValue + " is Negative Number.";
    }
    else{
        Print.innerHTML = "Input Field Is Empty.";
    }
}
