const count = 10;

let add = "";
let space = "  ";

for (let i = 0; i <= count; i++) {
    for (let k = count - 1; k >= i; k--) {
        add += space;
    }
    for (let j = 0; j <= i; j++) {
        add += "* ";
    }
    add += "\n";
}





console.log(add);
// document.getElementById("print").innerHTML = add;

// let count = 0;

// while(count < 10){
//     console.log("10");
// }