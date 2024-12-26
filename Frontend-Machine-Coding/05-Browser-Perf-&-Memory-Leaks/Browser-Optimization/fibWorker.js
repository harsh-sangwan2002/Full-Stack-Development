function calculateFibonacci(n) {

    if (n == 0 || n == 1)
        return n;

    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

onmessage = function (event) {
    const result = calculateFibonacci(event.data);
    postMessage(result);
}