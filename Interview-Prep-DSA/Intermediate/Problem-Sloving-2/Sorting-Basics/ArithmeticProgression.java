import java.util.Arrays;

public class ArithmeticProgression {

    public int solve(int[] A) {

        Arrays.sort(A);
        int n = A.length, k = A[1] - A[0];

        for (int i = 2; i < n; i++) {

            int currDiff = A[i] - A[i - 1];

            if (currDiff != k)
                return 0;
        }

        return 1;
    }
}
