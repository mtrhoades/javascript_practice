// To run this assignment, download the VS Code extension "Live Server"
// Then right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

/***********************/
/* For Loops           */
/***********************/

// ----------------------------------------------------------------------------------------------
console.log("For Loops - Exercise One");
// - Change the following loop.
//   The loop below will run twice, logging 0 and 1 to the console.
//   Modify the loop so that it runs 10 times, logging 0 to 9 to the console.
//
// Write your code here 👇

for (let index = 0; index < 10; index++) {
  console.log(index);
}

// ----------------------------------------------------------------------------------------------
console.log("For Loops - Exercise Two");
// - Create another for loop
// - Make your loop count from 1 to 20, logging only every number to the console.
//   1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
//   (This should include the number 20, but not include the number 0)
//
// Write your code here 👇

for (let i = 0; i < 21; i++) {
    console.log(i);
}


// ----------------------------------------------------------------------------------------------
console.log("For Loops - Exercise Three");
// - Create another for loop
// - Make your loop count from 2 to 20, logging only EVEN numbers to the console.
//   2 4 6 8 10 12 14 16 18 20
//   (This should include the number 20, and the number 2, but not include the number 0)
//
// Write your code here 👇



// ----------------------------------------------------------------------------------------------
// The following exercises will use the numbers array below

let numbers = [22, 15, 10, 19, 36, 2, 5, 20];

// ----------------------------------------------------------------------------------------------
console.log("For Loops - Exercise Four");
// - Create another for loop
// - Have your loop iterate through every number in the numbers array, printing the number to the console.
//
// Write your code here 👇

// ----------------------------------------------------------------------------------------------
console.log("For Loops - Exercise Five");
// - Create another for loop
// - Have your loop iterate through every number in the numbers array,
//   printing out numbers LESS THAN (but not including) 20.
//
// Write your code here 👇

// ----------------------------------------------------------------------------------------------
console.log("For Loops - Exercise Six");
// - Using a loop, multiply every number in the numbers array together.
// - Print the result to the console.
// - Hint: This should output 451440000
// - Hint 2: Remember that 0 times anything is 0.  So your result variable should not start at zero :)
//
// Write your code here 👇

// ----------------------------------------------------------------------------------------------
console.log("For Loops - Exercise Seven");
// - Using a loop, find the largest number in the numbers array.
// - Print it to the console.
// - Hint: The largest number is 36, so that's what your code should output.
//   (But don't hardcode that, find it with a loop...)
//
// Write your code here 👇

// ----------------------------------------------------------------------------------------------
console.log("For Loops - Exercise Eight");
// - Using a loop, filter out every number smaller than 10 from the numbers array.
//   This should produce a new array, putting numbers larger than or equal to 10 into this new array.
// - Print your new array to the console.
//
// Write your code here 👇

// When you are done with all of the exercises, check your console output to make sure it
// matches the expected output of each exercise and remove any extranneous console.log()
// statements from your code.