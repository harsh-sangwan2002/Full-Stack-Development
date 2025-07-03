// TC -> O(N*sqrt(N))
// SC -> O(1)
public class CountPrimes {

    private boolean isPrime(int A) {

        if (A == 1)
            return false;

        for (int n = 2; n * n <= A; n++) {

            if (A % n == 0)
                return false;
        }

        return true;
    }

    public int solve(int A) {

        int countPrimes = 0;

        for (int n = 1; n <= A; n++) {

            if (isPrime(n))
                countPrimes++;
        }

        return countPrimes;
    }
}
