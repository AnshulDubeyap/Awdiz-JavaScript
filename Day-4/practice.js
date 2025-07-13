arr2 = ["Hello", "World"];
let revArr = [];
let rev = "";

for (let i = 0; i < arr2.length; i++) {
  for (let j = arr2[i].length - 1; j >= 0; j--) {
    rev += arr2[i][j];
  }
  revArr.push(rev);
  rev = "";
}
console.log(revArr);
var a = 10;
var a = 20;
