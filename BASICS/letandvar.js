// In JavaScript, let and var are both used to declare variables, but they have some key differences in terms of scope, hoisting, and re-declaration. Here’s a detailed comparison with examples:

// 1. Scope
// var: Variables declared with var are function-scoped or globally scoped if not in a function. This means that they are accessible within the function they are declared in, or globally if declared outside of any function.

// let: Variables declared with let are block-scoped. This means they are only accessible within the block (enclosed by {}) where they are declared.

// Example:

// javascript
// Copy code
// function varExample() {
//   if (true) {
//     var x = 'Hello';
//   }
//   console.log(x); // 'Hello' - var is function-scoped, so x is accessible here
// }

// function letExample() {
//   if (true) {
//     let y = 'World';
//   }
//   console.log(y); // ReferenceError - y is block-scoped, so it's not accessible here
// }

// varExample();
// letExample();
// 2. Hoisting
// var: Variables declared with var are hoisted to the top of their containing function or global context. This means the variable declaration is processed before any code is executed, but not the initialization.

// let: Variables declared with let are also hoisted, but they are not initialized until the code execution reaches the let declaration. Accessing a let variable before its declaration will result in a ReferenceError.

// Example:

// javascript
// Copy code
// console.log(a); // undefined - var declarations are hoisted
// var a = 3;

// console.log(b); // ReferenceError - let declarations are hoisted but not initialized
// let b = 4;
// 3. Re-declaration
// var: Variables declared with var can be re-declared within the same scope without causing an error.

// let: Variables declared with let cannot be re-declared within the same scope. Doing so will result in a SyntaxError.

// Example:

// javascript
// Copy code
// var a = 1;
// var a = 2; // No error, var allows re-declaration

// let b = 1;
// let b = 2; // SyntaxError - let does not allow re-declaration in the same scope
// Summary
// var:

// Function-scoped or globally scoped
// Hoisted with initialization undefined
// Can be re-declared within the same scope
// let:

// Block-scoped
// Hoisted but not initialized
// Cannot be re-declared within the same scope
// In modern JavaScript development, let (and const for constants) is generally preferred over var due to its more predictable scoping and stricter rules, which help avoid common bugs and issues.

// var name = 'saikumar'
// console.log(name)

// if (true) {
//   var name = 'sai'
//   console.log(name)
// }

// name = 'kumar'
// console.log(name)

// const check = (name) => {
//   console.log(name)
//   var name = 'veera'
//   console.log(name)
// }

// check(name)
// Output:
// saikumar
// sai
// kumar
// kumar
// veera

// No error

let name2 = 'saikumar'
console.log(name2)

if (true) {
  let name2 = 'sai'
  console.log(name2)
}

name2 = 'kumar'

console.log(name2)

const check2 = (name2) => {
  console.log(name2)
  let name2 = 'veera' //we will get an error as name2 can not be re initialsed.

  console.log(name2)
}
check2(name2)
console.log(name2)
