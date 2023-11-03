function Converter() {
    const currency = document.getElementById("currency");
    const currencyOption = document.getElementById("option");
    const Print = document.getElementById("print");

    const currencyValue = currency.value;
    const currencyOptionValue =currencyOption.value;

    let answer;

    if(currencyOptionValue === "CAD"){
        answer = currencyCalculator(currencyValue , 61.07);
        Print.innerHTML = printLine(currencyValue,currencyOptionValue,answer);
    }else if (currencyOptionValue === "US"){
        answer = currencyCalculator(currencyValue , 83.26);
        Print.innerHTML = printLine(currencyValue,currencyOptionValue,answer);
    }else if(currencyOptionValue === "KWD"){
        answer = currencyCalculator(currencyValue , 269.24);
        Print.innerHTML = printLine(currencyValue,currencyOptionValue,answer);
    }else if(currencyOptionValue === "RUB"){
        answer = currencyCalculator(currencyValue , 0.85);
        Print.innerHTML = printLine(currencyValue,currencyOptionValue,answer);
    }
}

function currencyCalculator(a,b) {
    return value = a * b; 
}

function printLine (a,b,c){
    return a +" ("+ b +")"+ " = " + c.toFixed(2) + "₹";
}