Introduction
This class explored key JavaScript concepts related to scopes and closures. Two primary areas were discussed: lexical scope and closures. We delved into their definitions, how they function, their implications in coding, and how they are critical in understanding JavaScript's execution contexts.

Lexical Scope
Definition: Lexical scope in JavaScript refers to the accessibility of variables depending on where they are defined in the code, i.e., their hierarchy. It is the ability of a function to access variables from its parent scope, not vice versa.

Key Points:

Parent-Child Hierarchy: A nested function (child) has access to variables declared in its outer functions (parent), creating a scope chain. This chain continues up to the global scope but does not allow access from parent to child .

Examples:

var a = 20;

function parent() {
console.log(a); // 20

    function child() {
        console.log(a); // 20

        function child2() {
            console.log(a); // 20
        }
        child2();
    }
    child();

}

parent();
In this example, all the functions can access the variable a from their parent scopes .

Scope Chaining: The chain linking each child to its parent scope is known as the scope chain .

Closures
Definition: A closure is a function bundled with its lexical scope. It allows the function to access variables from its parent scope even after that parent function has finished executing.

Fundamental Concept:

When a function is returned from another function, it retains access to its original scope. This behavior of retaining the scope is what creates a closure .
Examples and Behavior:

function parent() {
var a = 10;
function child() {
console.log(a);
}
return child;
}

let functionReceived = parent();
functionReceived(); // Output: 10
In this example, functionReceived retains access to the variable a even after parent has finished execution .

Garbage Collection:

Variables and functions that are no longer needed and are not referenced within closures are eventually cleaned up by JavaScript's garbage collector .
Contextual Concepts
Execution Context:

This refers to the environment in which JavaScript code is executed. It determines the value of this, variables, and functions available .
Dead Zone:

Variables declared with let and const are not accessible before they are declared within their block scope, a condition known as the "temporal dead zone" .
Analogies and Exercises
Analogy:

The parent-child relationship in scopes can be seen as having access to one's parent's house (variables), but not their child's future house .
Exercises:

The learners were introduced to memorization exercises incorporating closures to improve understanding, particularly in creating functions that remember previously calculated results .
Conclusion
Understanding lexical scope and closures is crucial for mastering JavaScript's behavior in handling variables and functions. The concepts discussed ensure the predictable execution of JavaScript code and provide foundational knowledge for tackling more complex programming challenges.
