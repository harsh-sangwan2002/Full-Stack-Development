package LargestCoPrimeDivisor;

import java.util.ArrayList;
import java.util.List;

public class Sol1 {

    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Function to get all divisors of a number
    public static List<Integer> getDivisors(int n) {
        List<Integer> divisors = new ArrayList<>();
        for (int i = 1; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                divisors.add(i);
                if (i != n / i) { // Avoid duplicate for perfect squares
                    divisors.add(n / i);
                }
            }
        }
        return divisors;
    }

    public int cpFact(int A, int B) {

        List<Integer> divisors = getDivisors(A);
        int maxX = 1; // Minimum possible divisor is 1

        for (int x : divisors) {
            if (gcd(x, B) == 1) { // Check if X and B are co-prime
                maxX = Math.max(maxX, x);
            }
        }
        return maxX;
    }
}
