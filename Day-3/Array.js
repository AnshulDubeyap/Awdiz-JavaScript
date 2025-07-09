//! do while loop for counting

//? print even no between 1 to 100 using do while

let i = 1;
do {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
} while (i <= 100);

//! Break and continue

//? Execution of Break
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

//? Execution of continue
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

//! Array and array methods

//? Push

let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr); //? output = [ 1, 2, 3, 4, 5, 6 ]

//? Pop

arr.pop();
console.log(arr); //? output = [ 1, 2, 3, 4, 5 ]

//? Shift

arr.shift();
console.log(arr); //? output = [2, 3, 4, 5,]

arr.shift(5);
console.log(arr); //? output = [3, 4, 5], shift does not take any arguments

arr.unshift();
console.log(arr); //? output = [3, 4, 5,], unshift add one or more elements at the beginning of the array, but if we pass nothing it will do nothing

//? Splice

let Brr = [12, 13, 14, 15, 16, 17, 18, 19];
Brr.splice(3, 4);
console.log(Brr); //? output = [12, 13, 14, 16, 17, 18]

Brr.splice(1, -1);
console.log(Brr); //? output = [12, 14, 16, 17, 18]

Brr.splice(0, 1, 100);
console.log(Brr); //? output = [100, 13, 14, 16, 17, 18]

Brr.splice(2, 0, 200);
console.log(Brr); //? output = [100, 13, 200, 14, 16, 17, 18]

//? Slice

let Crr = [12, 13, 14, 14, 15, 16, 16, 17, 18, 19];
let Drr = Crr.slice(3, 7);
console.log(Drr); //? output = [14, 14, 15, 16]
