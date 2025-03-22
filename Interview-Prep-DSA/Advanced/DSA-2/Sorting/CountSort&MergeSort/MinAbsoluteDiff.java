import java.util.Arrays;

public class MinAbsoluteDiff {

    public int solve(int[] A) {

        Arrays.sort(A);
        int minDiff = Math.abs(A[1] - A[0]);

        for (int i = 2; i < A.length; i++) {

            int currDiff = Math.abs(A[i] - A[i - 1]);
            minDiff = Math.min(currDiff, minDiff);
        }

        return minDiff;
    }
}
