import java.util.Arrays;

public class ArithmeticProgression {

    public int solve(int[] A) {

        Arrays.sort(A);
        int d = A[1] - A[0], n = A.length;

        for (int i = 2; i < n; i++) {

            int currDiff = A[i] - A[i - 1];

            if (currDiff != d)
                return 0;
        }

        return 1;
    }
}
