function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    return x;
}

z()();

// Closures are used in - 
// 1. Data hiding
// 2. Partial application
// 3. Currying
// 4. Memoization
// 5. Function factories
// 6. Event handlers
// 7. Setters and getters
// 8. Maintaining state in asynchronous code
// 9. Module pattern
// 10. Maintaining private variables
// 11. Function composition
// 12. Function decorators
// 13. Function chaining