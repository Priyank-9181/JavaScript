function index() {
    const first = document.getElementById("num1");
    const second = document.getElementById("num2");
    const third = document.getElementById("num3");
    const Print = document.getElementById("print");

    const firstValue = parseInt(first.value);
    const secondValue = parseInt(second.value);
    const thirdValue = parseInt(third.value);

    let check;
    check = firstValue;

    // if(firstValue === secondValue || secondValue === thirdValue || thirdValue === firstValue){
    //     Print.innerHTML = "All Values Are Same";
    // }
    
    if(secondValue > check){
        check = secondValue;
    }
    
    if (thirdValue > check) {
        check = thirdValue;
    }
    
    Print.innerHTML = check + " is Large Number Among 3 Numbers."
}
