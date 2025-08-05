// TC -> O(N * sqrt(N))
// SC -> O(1)
public class CountPrimes {

    private boolean isPrime(int A) {

        for (int i = 2; i <= Math.sqrt(A); i++) {

            if (A % i == 0)
                return false;
        }

        return true;
    }

    public int solve(int A) {

        int count = 0;

        for (int i = 2; i <= A; i++) {

            if (isPrime(i))
                count++;
        }

        return count;
    }
}
