function click_1() {
  const firstSquare = document.getElementById("square");
  firstSquare.style.display = "block";
  firstSquare.innerHTML = "X";
}

const a = "Asss";
const b = [12, 23, 23, 23, 23];

const d = {
  name: "Priyank",
  Surname: "Shekhda",
  age: "21",
  fullName: function () {
    return this.name + " " + this.Surname;
  },
};

console.log(d["name"]);
console.log(d.fullName());

const arr = [20, 13, 10, 21, 40];

const arr1 = arr.map(function (a) {
  return (final = a % 2 === 0 ? a + " Even" : a + " Odd");
});

const temp = [];

arr.forEach(function (a) {
  const b = a * 2;
  temp.push(b);
});

const temp1 = [];

arr.forEach(function (a) {
  const value = a.toString().charAt(0);
  const value_1 = parseInt(value);
  temp1.push(value_1);
});

console.log(arr);
console.log(arr1);
console.log(temp);
console.log(temp1);

const priyank = {
  name: "Priyank",
  age: 19,
};

const meet = {
  name: "Meet",
};

// for (const i of priyank) {
//   console.log(i);
// }

const arrName = [];

for (const i in priyank) {
  if (i === "name") {
    const n = priyank[i];
    arrName.push(n);
  }
}

for (const i in meet) {
  if (i === "name") {
    const n = meet[i];
    arrName.push(n);
  }
}

console.log(arrName);