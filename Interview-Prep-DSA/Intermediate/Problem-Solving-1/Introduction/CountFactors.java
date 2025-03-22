public class CountFactors {

    public int solve(int A) {

        if (A == 1)
            return 1;

        int factors = 2;

        for (int i = 2; i * i <= A; i++) {

            if (i * i == A)
                factors++;

            else if (A % i == 0)
                factors += 2;
        }

        return factors;
    }
}
