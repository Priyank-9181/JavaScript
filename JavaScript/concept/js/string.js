// function main() {
//     const string = document.getElementById("string").value;
//     const print = document.getElementById("print");
//     const answer = checkString(string);
//     print.innerHTML = answer;
// }

// function checkString(string) {
//     if (typeof (string) === "string") {
//         return true;
//     } else {
//         return false;
//     }
// }

// function stringEmptyOrNot(string) {
//     const convertString = string.toString();
//     if (convertString === "") {
//         return true;
//     } else {
//         return false;
//     }
// }

// function convertToArrayWords(string) {
//     const convert = string.toString();
//     const arr = convert.split(" ");
//     return arr;
// }

// function character(string, num) {
//     const convert = string.toString();
//     const result = convert.slice(0, num);
//     return result;
// }

// function abr(string) {
//     const convert = string.trim().split(" ");
//     if (convert.length > 1) {
//         return (convert[0] + " " + convert[1].charAt(0) + ".");
//     }
//     return undefined;
// }

// const email = "jaysukhshekhda11@gmail.com"

// function getPaddedEmail(email) {
//     const arr = email.split("@");
//     const name = arr[0];
//     const splitName = name.slice(0, 3);
//     const paddedName = splitName.padEnd(6, ".");
//     const paddedEmail = paddedName.concat("@", arr[1]);
//     //   const paddedEmail = arr[0]
//     //     .slice(0, 3)
//     //     .padEnd(arr[0].length, "X")
//     //     .concat("@", arr[1]);
//     return paddedEmail;
// }

// console.log(getPaddedEmail(email));

// const string = "hello wrold";

// function getFirstchartoUpper(string) {
//     const firstCharacter = string.trim().charAt(0);
//     return firstCharacter.toUpperCase() + string.slice(1,string.length);
// }

// console.log(getFirstchartoUpper(string));

// const string = "hello wrold";

// function getFirstchartoUpperallWords(string) {
//   return string.replace(/\w\S*/g, function (txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }

// console.log(getFirstchartoUpperallWords(string));

// const temp = "We are Doing js Practice";

// function truncate(string,length,ending) {
//     if (length == null) {
//         length = 100;
//       }
//       if (ending == null) {
//         ending = '...';
//       }
//       if (string.length > length) {
//       return string.substring(0, length - ending.length) + ending;
//       } else {
//         return string;
//       }
// }

// console.log(truncate(temp));


const number = "+91-8200099181";
const number_1 = "+91-6353125777";

console.log(myPadPhoneNumber(number_1));


function myPadPhoneNumber(string) {
  const numberArray = string.trim().split("-");
  const number = numberArray[1];
  const splitNumber = number.slice(7,10);
  const padNumber = splitNumber.padStart(10,"*");
  return numberArray[0] + "-" + padNumber;  
}