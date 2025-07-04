import java.util.Arrays;

// TC -> O(N*log(N))
// SC -> O(log(N))
public class ArithmeticProgression {

    public int solve(int[] A) {

        Arrays.sort(A);
        int n = A.length, d = A[1] - A[0];

        for (int i = 2; i < n; i++) {

            int currD = A[i] - A[i - 1];

            if (currD != d)
                return 0;
        }

        return 1;
    }
}
