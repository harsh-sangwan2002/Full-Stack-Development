# Revision Notes: Understanding `this` and Arrow Functions in JavaScript

## Introduction to `this` in JavaScript

In JavaScript, `this` is a keyword that points to the object from which it was called. It represents the execution context of a function and dynamically binds based on how and where it was called.

### Context and Dynamic Binding

- **Global Context**: In the global execution context, `this` refers to the global object. In a browser, it is the `window` object; in Node.js, it is `global`.
- **Function Context**: When `this` is used inside a regular function, within a non-strict mode, it dynamically binds to the global object. In strict mode, it remains `undefined` if not otherwise bound.
- **Object Method Context**: When a function is invoked as an object method, `this` refers to the object that contains the function.

### Common Scenarios

1. **Simple Function Call**:

   - Non-strict Mode: `this` is the global object.
   - Strict Mode: `this` is `undefined`.

2. **Object Method Call**:

   - `this` refers to the calling object.

3. **Arrow Functions**:
   - Arrow functions do not have their own `this` context. They inherit `this` from the parent scope at the time they are defined, not when they are executed .

### Understanding with Examples

- **Example of Function Context**:
  ```javascript
  function example() {
    console.log(this);
  }
  example(); // Non-strict: window, Strict: undefined
  Example of Object Method:
  ```

const obj = {
method: function() {
console.log(this);
}
};
obj.method(); // Logs obj
Example of Arrow Function:

const objArrow = {
arrowMethod: () => {
console.log(this);
}
};
objArrow.arrowMethod(); // Logs global object or undefined in strict mode if executed in a global level
Arrow Functions: A Deeper Dive
Arrow functions provide a more concise syntax and do not bind their own this - they take this from the surrounding lexical context.

Characteristics of Arrow Functions
Lexical Scoping: Arrow functions capture the this value from their lexical scope, meaning they inherit this from the surrounding function.
Benefits: Useful when you need to maintain the context inside nested functions, such as callbacks or event handlers.
Example of Arrow Function Behavior
function Person() {
this.age = 0;

setInterval(() => {
this.age++; // 'this' properly refers to the 'Person' instance
}, 1000);
}
let p = new Person();
In this example, this.age within the arrow function refers to the Person instance, not the global object .

Strict Mode and Its Effect on this
Using "use strict" at the beginning of a JavaScript file or function activates strict mode, which provides a stricter parsing and error handling, leading to fewer silent errors.

Key Differences in Strict Mode
Global Context: this is undefined if not bound explicitly.
Error on Undeclared Variables: Variables must be declared to be used.
No Implicit Global Variables: Assigning to undeclared identifiers throws an error .
Analogies Used To Explain this
In the session, fun analogies were discussed:

Crush, BF, GF: this was humorously compared to having a "crush" for the global object, a "BF" for the object on which the method is invoked, and "GF" for situations with function calls without explicit object context .
Conclusion
Understanding this in JavaScript is crucial for mastering how functions and objects interact. The variability of this across different contexts and the introduction of arrow functions with lexical scoping requires careful attention. Remember, with arrow functions, who calls the function does not matter, but where it was created does play a significant role.
