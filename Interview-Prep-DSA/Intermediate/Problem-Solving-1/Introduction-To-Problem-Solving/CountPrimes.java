public class CountPrimes {

    private boolean isPrime(int n) {

        for (int i = 2; i <= Math.sqrt(n); i++) {

            if (n % i == 0)
                return false;
        }

        return true;
    }

    public int solve(int A) {

        int primes = 0;

        for (int i = 2; i <= A; i++) {

            if (isPrime(i))
                primes++;
        }

        return primes;
    }
}
