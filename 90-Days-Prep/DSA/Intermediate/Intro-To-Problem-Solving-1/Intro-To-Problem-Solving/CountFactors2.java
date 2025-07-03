// TC -> O(sqrt(N))
// SC -> O(1)
public class CountFactors2 {

    public int solve(int A) {

        if (A == 1)
            return 1;

        int factors = 2;

        for (int n = 2; n * n <= A; n++) {

            if (A % n == 0) {

                if (n * n == A)
                    factors++;

                else
                    factors += 2;
            }
        }

        return factors;
    }
}
