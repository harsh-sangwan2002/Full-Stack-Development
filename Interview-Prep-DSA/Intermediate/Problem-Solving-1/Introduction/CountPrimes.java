public class CountPrimes {

    private boolean checkPrime(int n) {

        if (n <= 1)
            return false;

        for (int i = 2; i * i <= n; i++) {

            if (n % i == 0)
                return false;
        }

        return true;
    }

    public int solve(int A) {

        int primes = 0;

        for (int i = 2; i <= A; i++) {

            if (checkPrime(i))
                primes++;
        }

        return primes;
    }
}
