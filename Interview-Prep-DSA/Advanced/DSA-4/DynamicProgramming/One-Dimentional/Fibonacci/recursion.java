package Fibonacci;

import java.util.*;

public class recursion {

    private static int fibonacci(int n) {

        if (n <= 1)
            return n;

        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int res = fibonacci(n);
        System.out.println(res);

        scn.close();
    }
}