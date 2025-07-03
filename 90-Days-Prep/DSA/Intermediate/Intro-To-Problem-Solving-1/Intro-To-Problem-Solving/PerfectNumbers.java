// TC -> (sqrt(N))
// SC -> O(1)
public class PerfectNumbers {

    public int solve(int A) {

        if (A == 1)
            return 0;

        int sum = 1;

        for (int n = 2; n * n <= A; n++) {

            if (A % n == 0) {

                if (n * n == A)
                    sum += n;

                else
                    sum += n + (A / n);
            }
        }

        return sum == A ? 1 : 0;
    }
}
