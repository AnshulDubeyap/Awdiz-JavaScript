//!-- 1

let num = 1;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//!--2

let num1 = 12;

if (num1 % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//!--3

let age = 19;

if (age < 13) {
  console.log("You are an child");
} else if (age >= 13 && age <= 20) {
  console.log("You are a teenager");
} else if (age > 20 && age <= 60) {
  console.log("You are an adult");
} else {
  console.log("You are a senior");
}

//!--4 Print Grades

let marks = 80;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 80 && marks < 89) {
  console.log("B");
} else if (marks >= 70 && marks < 79) {
  console.log("C");
} else if (marks >= 60 && marks < 69) {
  console.log("D");
} else {
  console.log("Fail");
}

//!--5 Print Day

let num4 = 3;

switch (num4) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

//!--6 Switch with vowel

let letter = "a";

switch (letter) {
  case "a":
    console.log("Vowel");
    break;
  case "A":
    console.log("Vowel");
    break;
  case "e":
    console.log("Vowel");
    break;
  case "E":
    console.log("Vowel");
    break;
  case "i":
    console.log("Vowel");
    break;
  case "I":
    console.log("Vowel");
    break;
  case "o":
    console.log("Vowel");
    break;
  case "O":
    console.log("Vowel");
    break;
  case "u":
    console.log("Vowel");
    break;
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}

//!--7

let year = 2000;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("year is leap year");
} else {
  console.log("year is not a leap year");
}

//!--8
let operator = "+";

switch (operator) {
  case "+":
    console.log("Addition");
    break;
  case "-":
    console.log("subtraction");
    break;
  case "*":
    console.log("Multiplication");
    break;
  case "/":
    console.log("Division");
    break;
  case "%":
    console.log("Modulus");
    break;
  default:
    console.log("Invalid operator");
    break;
}

//!--9 Vote eligible

let age1 = 22;

if (age1 >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//!--10 Triangle

let side1 = 3;
let side2 = 4;
let side3 = 5;

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  console.log("Triangle");
} else {
  console.log("No Triangle");
}

//! Part-2

//!--1 Print even numbers

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//!--2 Print in reverse order

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//!--3 Print Odd numbers

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//!--4 Table of 7

for (let i = 1; i <= 10; i++) {
  console.log(7 * i);
}

//!--5 divisible by both 3 and 5

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}

//!--6 Factorial of a number

let num5 = 5;
let fact = 1;

while (num5 > 0) {
  num5--;
  fact = fact * num5;
}
console.log(fact);

//!--7 Sum of numbers

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

//!--8 Fizz Buzz

for (let i = 0; i < 50; i++) {
  switch (i) {
    case i % 3 == 0:
      console.log("Fizz");
      break;
    case i % 5 == 0:
      console.log("buzz");
      break;
    case i % 3 && i % 5 == 0:
      console.log("fizzbuzz");
      break;
    default:
      console.log(i);
      break;
  }
}

//!--9 fibonacci

let num6 = 0;
let num7 = 1;
let sum2 = 0;

for (let i = 0; i < 10; i++) {
  sum2 = num6 + num7;
  num6 = num7;
  num7 = sum2;

  console.log(sum2);
}

//!--10

let square = 1;

for (let i = 0; i < 10; i++) {
  square = square * i;
  square++;

  if (square < 20) {
    console.log("small");
  } else if (square > 20 && square < 50) {
    console.log("medium");
  } else {
    console.log("big");
  }
}
