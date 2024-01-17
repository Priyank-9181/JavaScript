// const searchString = searchValue.toString();

// function find() {
//   const searchValue = document.getElementById("search").value;

//   const obj = [
//     {
//       name: "Priyank",
//       age: 18,
//     },
//     {
//       name: "Meet",
//       age: 19,
//     },
//     {
//       name: "Neel",
//       age: 19,
//     },
//     {
//       name: "jeel",
//       age: 20,
//     },
//   ];

//   let temp;

//   const y = obj.forEach(function (value, index, array) {
//     if (value.name === searchValue) {
//       temp = array[index];
//     }
//   });

//   let text = "";

//   for (let i in temp) {
//     text += i.toUpperCase() + ": " + temp[i] + "\n";
//     console.log(i + ":" + temp[i]);
//   }

//   const print = document.getElementById("print");

//   print.innerHTML = text;

//   console.log(obj);
//   console.log(temp);
// }

// const obj = [
//   {
//     name: "Priyank",
//     age: 18,
//   },
//   {
//     name: "Meet",
//     age: 19,
//   },
//   {
//     name: "Neel",
//     age: 19,
//   },
//   {
//     name: "jeel",
//     age: 20,
//   },
// ];

// obj.sort(function (a, b) {
//   return a.age - b.age;
// });

//   console.log(obj);

// debugger;

function func(a) {
  setTimeout(() => {
    console.log("set function", a);
  }, 2000);
  return a;
}

const variable = func(10);
console.log("outer print", variable);
