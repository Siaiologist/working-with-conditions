# Writing Conditional Statements in JavaScript

## Conditions and If Statements

- Conditional statements in JavaScript are used to make decisions and control the flow of the program based on certain conditions or expressions. They allow you to execute different blocks of code depending on whether a given condition evaluates to true or false. Conditional statements are essential for creating dynamic and interactive programs that respond to different situations.
 - The if statement is the most common conditional statement. It allows you to execute a block of code if a specific condition is true.

 ```javascript
const x = 10;

if (x > 0) {
  console.log("x is positive.");
}

 ```

## Conditional Operators

- In JavaScript, scope refers to the context in which variables are declared and accessed. It defines the visibility and accessibility of variables in different parts of your code during runtime. Understanding scope is crucial for writing bug-free, maintainable, and efficient JavaScript code.
 - You can use <, >, <=, >= to compare different values.


 ```javascript
const age = 18;

if (age >= 18) {
    alert("You can vote!");
} 
 ```


## Equivalency Operators

- In JavaScript, there are several equivalency operators used to compare values for equality or inequality. These operators allow you to evaluate whether two values are equal or not, and they return a Boolean value (true or false) based on the comparison result. 
 - Equality Operator (==): The equality operator (==) compares two values for equality after performing type coercion.

 ```javascript
console.log(5 == "5"); // Output: true (Number 5 is equal to String "5" after type coercion)
console.log(5 == 10); // Output: false
 ```

 - Strict Equality Operator (===): The strict equality operator (===) compares two values for equality without performing type coercion. It checks both value and type.

```javascript
console.log(5 === "5"); // Output: false (Number 5 is not equal to String "5" with different types)
console.log(5 === 5); // Output: true
```

 - Inequality Operator (!=): The inequality operator (!=) compares two values for inequality after checking the types of the values. It converts values to the same type before making the comparison. This is also called 'type coercion'.

```javascript
console.log(5 != "5"); // Output: false (Number 5 is equal to String "5" after type coercion)
console.log(5 != 10); // Output: true
```

### Prep

1. Connect your js file to your HTML file
2. Open your code in the browser and open your console

### Activities
1. In the `js` file, complete the list of exercises. 
