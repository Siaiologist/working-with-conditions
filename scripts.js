/************************** Exercise 1 ***********************/

// List five different examples of a website using a conditional statement. 








/************************** Exercise 2 ***********************/

let cash = 18;
let lunch = "granola bar";

if (cash > 10) {
  lunch = "sandwich";
}

if (cash > 15) {
  lunch = "fancy sandwich";
}

if (cash > 20) {
  lunch = "lobster rolls";
}

// After we execute the above code, what will be the value of `lunch`? Think about it for a bit, write down a guess below, then log the value of `lunch` to the console to see if you were right.



// Try changing the value of `cash` (you can directly change the value we assign to it above) to the following values. For EACH value, write down your guess as to what the value of `lunch` will be, then log the result to the console to double-check your answer. If writing `console.log` statements in this file, you only have to write one `console.log` statement for this question.

// - What will be the value of `lunch` when `cash` is 12?


// - What will be the value of `lunch` when `cash` is 4?


// - What will be the value of `lunch` when `cash` is 35?


// What happens if you rearrange the if statements? Move the first `if` statement (the one with the condition `cash < 10`) and its whole code block (that is, all three lines of the if statement) down below the three lines of the last `if` statement. Then CHANGE the value of `cash` to 18.

// Write down here what you think the result will be. Then log the result to the console to check your assumption.


/************************** Exercise 3 ***********************/

let itemToBuy = "";
let savings = 100;
if (savings > 500) {
  itemToBuy = "Computer";
} else if (savings > 200) {
  itemToBuy = "Phone";
} else if (savings > 0) {
  itemToBuy = "Dinner";
} else {
  itemToBuy = "...still saving...";
}


// Based on the above code, what will be the value of itemToBuy after the code is run? Write your guess below. How will you check your answer to be sure it is correct?






/************************** Exercise 4 ***********************/

// let userResponse = prompt("Give me a number, any number, and I will tell you whether it is positive or negative.");

// Remove the `//` from the front of the line above. (Feel free to add them back when you're done with this section, so you don't get prompts for a problem you're not working on.)


// Create a conditional statement that will check to see if the number is positive or negative. Alert (or log to the console) a message telling the user which it is.








/************************** Exercise 5 ***********************/

const wholesalePrice = 5.45;
const retailPrice = 9.99;
const quantity = 47;
const salesTotal = retailPrice * quantity;
const profit = salesTotal - wholesalePrice * quantity;


// Write a conditional statement for your online store. If the profit is greater than $400, log to the console, 'You are good for today!'. If the profit is less than or equal to $400, log the string, 'You need to keep working!'







/*********************** BONUS EXERCISES *********************/


/************************** Exercise 6 ***********************/

// Write a function that takes three numbers as arguments and returns the largest number among them. Do not use `Math.max`, though you're welcome to do so after you solve it using conditionals.









/************************** Exercise 7 ***********************/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Call the above function so that it evaluates to "Even", and save that value in a variable. Log the variable's value to the console.



// Call the above function so that it evaluates to "Odd", and save that value in a variable. Log the variable's value to the console.






/************************** Exercise 8 ***********************/

// Create a function that takes in one argument, a user's password. Check to see if the password is longer than 12 characters. If it is, alert 'Welcome', if it is not, alert 'You need to enter a longer password.'







/************************** Exercise 9 ***********************/

// Create a function that takes in two arguments, a user's password and what the user wrote to confirm their password. Check to see if the user's passwords are the exact same string. If they are, alert 'Welcome', if they are not, alert 'Your passwords do not match.'
