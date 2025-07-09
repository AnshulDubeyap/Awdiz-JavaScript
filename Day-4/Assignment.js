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

//! Reverse Only Words in a array of String

let arr2 = ["Hello", "World"];
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

//! Check Even or Odd number
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenOdd = [];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 == 0) {
    evenOdd.push("Even");
  } else {
    evenOdd.push("Odd");
  }
}
console.log(evenOdd);

//! Flatten the nested Array

let arr4 = [1, 2, [3, 4], 5, 7, 9];
let flatArr = [];

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i].length >= 1) {
    for (let j = 0; j < arr4[i].length; j++) {
      flatArr.push(arr4[i][j]);
    }
  } else {
    flatArr.push(arr4[i]);
  }
}

console.log(flatArr);

//! Print Prime no between 10 and 50

for (let i = 10; i < 50; i++) {
  let isPrime = true;

  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("the prime number is : " + i);
  }
}

//! Filter names start with vowels

let Input = ["Alice", "Bob", "Eve", "Uma", "Charlie"];

for (let i = 0; i < Input.length; i++) {
  let firstChar = Input[i].charAt(0).toLowerCase();

  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  ) {
    console.log("Yes it starts with vowel: " + Input[i]);
  }
}

//! Rotate the Array by 1 to the Right

let arr5 = [1, 2, 3, 4];
let rotateArr = [];

for (let i = 0; i < arr5.length; i++) {
  if (i < arr5.length - 1) {
    rotateArr[i + 1] = arr5[i];
  } else {
    rotateArr[0] = arr5[i];
  }
}

console.log(rotateArr);

//! Check if all items are greater than 10

let arr6 = [12, 13, 14, 15, 6];
result = [];

arr6.forEach((item) => {
  if (item > 10) {
    result.push(true);
  } else {
    result.push(false);
  }
});
console.log(result);

//! Filter numbers divisible by 3 and 5

let arr7 = [10, 15, 30, 20, 45];

let filtered = arr7.filter((item) => {
  if (item % 3 == 0 && item % 5 == 0) {
    return item;
  }
});
console.log(filtered);

//! Print Fibonacci upto 15

let a = 0;
let b = 1;
let sum = 0;
console.log(a);
console.log(b);

for (let i = 0; i <= 15; i++) {
  sum = a + b;
  a = b;
  b = sum;
  console.log(sum);
}

//! Occurrences of value in Array

let arr8 = [1, 2, 1, 3, 1, 4];

for (let i = 0; i < arr8.length; i++) {
  let count = 0;
  for (let j = i; j < arr8.length; j++) {
    if (arr8[i] == arr8[j]) {
      count = count + 1;
    }
  }
  console.log(arr8[i] + " Appears : " + count + " times");
}

//! Sum of Even numbers using reduce

let arr9 = [1, 2, 3, 4, 5, 6];

let sum2 = arr9.reduce((acc, sum) => {
  sum = sum + acc;
  return sum;
});

console.log(sum2);

//! Check if String is palindrome

let str1 = "madam";
let rev2 = "";

for (let i = 0; i < str1.length; i++) {
  rev2 = rev2 + str1.charAt(str1.length - 1 - i);
}

if ((rev2 = str1)) {
  console.log("Yes a palindrome : " + str1);
}

//! 15. Return grade based on marks using switch

let marks = 85;
let grade = "";

switch (true) {
  case marks >= 90:
    grade = "A";
    break;
  case marks >= 80:
    grade = "B";
    break;
  case marks >= 70:
    grade = "C";
    break;
  case marks >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log("Grade is: " + grade);

//! 16. Test re-declaring a variable

let x = 10;
// var x = 20; // Uncommenting this line will cause SyntaxError
console.log(x); // Output: 10

//! 17. Remove duplicates from array without Set

let arr10 = [1, 2, 2, 3, 4, 1];
let uniqueArr = [];

for (let i = 0; i < arr10.length; i++) {
  let found = false;
  for (let j = 0; j < uniqueArr.length; j++) {
    if (arr10[i] === uniqueArr[j]) {
      found = true;
      break;
    }
  }
  if (!found) {
    uniqueArr.push(arr10[i]);
  }
}
console.log(uniqueArr);

//! 18. Slice first 3 elements of array

let arr11 = [10, 20, 30, 40, 50];
let sliced = [];

for (let i = 0; i < 3; i++) {
  sliced.push(arr11[i]);
}
console.log(sliced);

//! 19. Find intersection of two arrays

let arr12 = [1, 2, 3];
let arr13 = [2, 3, 4];
let intersection = [];

for (let i = 0; i < arr12.length; i++) {
  for (let j = 0; j < arr13.length; j++) {
    if (arr12[i] === arr13[j]) {
      intersection.push(arr12[i]);
      break;
    }
  }
}
console.log(intersection);

//! 20. Reverse array using while loop (in-place)

let arr14 = [1, 2, 3, 4];
let start = 0;
let end = arr14.length - 1;

while (start < end) {
  let temp = arr14[start];
  arr14[start] = arr14[end];
  arr14[end] = temp;
  start++;
  end--;
}
console.log(arr14);

//! 21. Check if all elements are positive using flag

let arr15 = [1, 4, 6, 9];
let allPositive = true;

for (let i = 0; i < arr15.length; i++) {
  if (arr15[i] < 0) {
    allPositive = false;
    break;
  }
}
console.log(allPositive);

//! 22. Check if string has both uppercase and lowercase letters

let str2 = "HelloWorld";
let hasUpper = false;
let hasLower = false;

for (let i = 0; i < str2.length; i++) {
  if (str2[i] >= "A" && str2[i] <= "Z") {
    hasUpper = true;
  }
  if (str2[i] >= "a" && str2[i] <= "z") {
    hasLower = true;
  }
}

console.log(hasUpper && hasLower);

//! 23. Determine if a number is prime using flag

let num = 13;
let isPrime2 = true;

for (let i = 2; i * i <= num; i++) {
  if (num % i === 0) {
    isPrime2 = false;
    break;
  }
}
console.log(isPrime2);

//! 24. Check if array is sorted in ascending order

let arr16 = [2, 5, 8, 9];
let isSorted = true;

for (let i = 0; i < arr16.length - 1; i++) {
  if (arr16[i] > arr16[i + 1]) {
    isSorted = false;
    break;
  }
}
console.log(isSorted);

//! 25. Check if a word has repeating characters

let word = "coding";
let charMap = {};
let hasRepeat = false;

for (let i = 0; i < word.length; i++) {
  if (charMap[word[i]]) {
    hasRepeat = true;
    break;
  } else {
    charMap[word[i]] = true;
  }
}
console.log(hasRepeat);
