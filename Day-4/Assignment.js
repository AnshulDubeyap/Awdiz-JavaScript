//! Find the second highest number in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let highest = arr[0];
let secondHighest = arr[0];

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[j] > highest) {
      secondHighest = highest;
      highest = arr[j];
    }
  }
}
console.log(secondHighest); // Output: 9

//! Character Frequency in a String

let str = "hello world";

for (let i = 0; i < str.length; i++) {
  let count = 0;
  for (let j = i; j < str.length; j++) {
    if (str[i] == str[j]) {
      count++;
    }
  }
  console.log(str[i] + " : " + count);
}

//! Reverse Only Words in a String

let str1 = "hello world";


