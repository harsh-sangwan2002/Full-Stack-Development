import java.util.Arrays;

public class PairWithDiff {

    public int solve(int[] A, int B) {

        Arrays.sort(A);
        int count = 0, i = 0, j = 1;

        while (j < A.length) {

            if (j == i) {
                j++;
                continue;
            }

            int x = A[i], y = A[j];

            if (y - x == B) {

                count++;

                while (i < A.length && A[i] == x)
                    i++;
                while (j < A.length && A[j] == y)
                    j++;
            }

            else if (y - x > B)
                i++;

            else
                j++;
        }

        return count;
    }
}
