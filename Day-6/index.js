// Save data
localStorage.setItem("username", "Anshul");

// Get data
let user = localStorage.getItem("username");
console.log("Hello,", user);

// Remove data
localStorage.removeItem("username");

// Clear all data
localStorage.clear();

// Save session data
sessionStorage.setItem("theme", "dark");

// Get session data
let theme = sessionStorage.getItem("theme");
console.log("Current theme:", theme);

// Clear session data
sessionStorage.clear();

// Right-angled triangle pattern
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}
