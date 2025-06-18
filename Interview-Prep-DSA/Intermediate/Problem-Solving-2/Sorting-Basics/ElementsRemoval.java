import java.util.Arrays;

public class ElementsRemoval {

    public int solve(int[] A) {

        Arrays.sort(A);
        int n = A.length, cost = 0, count = 1;

        for (int i = n - 1; i >= 0; i--) {
            cost += A[i] * count;
            count++;
        }

        return cost;
    }
}
