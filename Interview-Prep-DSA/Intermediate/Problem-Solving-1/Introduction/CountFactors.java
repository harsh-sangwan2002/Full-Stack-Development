public class CountFactors {

    public int solve(int A) {

        int factors = 2;

        for (int i = 2; i <= Math.sqrt(A); i++) {

            if (i * i == A)
                factors++;

            else if (A % i == 0)
                factors += 2;
        }

        return factors;
    }
}
