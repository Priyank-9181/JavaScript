function index() {
    const FValue = document.getElementById("num1");
    const SValue = document.getElementById("num2");
    const Sign = document.getElementById("opt");
    const Print = document.getElementById("print");

    const FirstValue = parseInt(FValue.value);
    const SecondValue = parseInt(SValue.value);
    const erithMetic = Sign.value;

    let Answer;

    if (erithMetic === "+") {
        Answer = FirstValue + SecondValue;
        Print.innerHTML = Line(FirstValue, erithMetic, SecondValue, Answer);
    } else if (erithMetic === "-") {
        Answer = FirstValue - SecondValue;
        Print.innerHTML = Line(FirstValue, erithMetic, SecondValue, Answer);
    } else if (erithMetic === "*") {
        Answer = FirstValue * SecondValue;
        Print.innerHTML = Line(FirstValue, erithMetic, SecondValue, Answer);
    } else if (erithMetic === "/") {
        Answer = FirstValue / SecondValue;
        Print.innerHTML = Line(FirstValue, erithMetic, SecondValue, Answer);
    } else if (erithMetic === "%") {
        Answer = FirstValue % SecondValue;
        Print.innerHTML = Line(FirstValue, erithMetic, SecondValue, Answer);
    } else if (erithMetic === "**") {
        Answer = FirstValue ** SecondValue;
        Print.innerHTML = Line(FirstValue, erithMetic, SecondValue, Answer);
    }

}

function Line(a, b, c, d) {

    return a + " " + b + " " + c + " = " + d;
}