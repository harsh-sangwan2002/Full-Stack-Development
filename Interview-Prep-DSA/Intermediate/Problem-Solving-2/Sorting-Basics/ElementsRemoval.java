import java.util.Arrays;

public class ElementsRemoval {

    public int solve(int[] A) {

        int n = A.length, count = 1, minCost = 0;
        Arrays.sort(A);

        for (int i = n - 1; i >= 0; i--) {
            minCost += A[i] * count;
            count++;
        }

        return minCost;
    }
}
