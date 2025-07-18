// Basic template literal
const name = "Anshul";
const greeting = `Hello, ${name}!`;
console.log(greeting);

// Basic Promise
const fetchData = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Data fetched successfully.");
  } else {
    reject("Failed to fetch data.");
  }
});

fetchData
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise with no comments
const load = new Promise((res, rej) => {
  res("Loaded");
});

load.then((msg) => console.log(msg));

//! ternary operator
let number = 10;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result); // Output: Even
