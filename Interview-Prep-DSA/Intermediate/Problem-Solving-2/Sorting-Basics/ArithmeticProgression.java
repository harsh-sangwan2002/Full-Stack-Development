import java.util.Arrays;

public class ArithmeticProgression {

    public int solve(int[] A) {

        Arrays.sort(A);
        int diff = A[1] - A[0];

        for (int i = 2; i < A.length; i++) {

            int currDiff = A[i] - A[i - 1];

            if (currDiff != diff)
                return 0;
        }

        return 1;
    }
}
