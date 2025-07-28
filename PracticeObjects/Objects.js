//!  Find the First Non-Repeating Element in an Array

let Input = [4, 5, 1, 2, 0, 4, 1, 0];
let obj = {};

for (let i = 0; i < Input.length; i++) {
  if (obj[Input[i]]) {
    obj[Input[i]]++; // increment the count
  } else {
    obj[Input[i]] = 1; // initialize count
  }
}

for (let i = 0; i < Input.length; i++) {
  if (obj[Input[i]] === 1) {
    console.log("First non-repeating element:", Input[i]);
    break;
  }
}

console.log(obj);

//! Check if the objects are similar
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 2, a: 1 };

for (key in obj1) {
  flag = false;
  for (key2 in obj2) {
    if (key == key2 && obj[key] == obj[key2]) {
      flag = true;
    }
  }
}
if (flag == true) {
  console.log("Object are simillar");
}
let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let b = [];

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    if (i == j) {
      b.push(a[i][j]);
    }
    if (i + j == a.length - 1) {
      b.push(a[i][j]);
    }
  }
}

console.log(b);
