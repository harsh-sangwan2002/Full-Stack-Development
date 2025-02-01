package Fibonacci;

import java.util.*;

public class tabulation {

    private static int fibonacci(int n) {

        int a = 0, b = 1;

        for (int i = 1; i <= n; i++) {
            int c = a + b;
            b = a;
            a = c;
        }

        return a;
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