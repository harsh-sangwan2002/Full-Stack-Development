import java.util.Arrays;

public class ElementRemoval {

    public int solve(int[] A) {

        int n = A.length, cost = 0, count = 1;
        Arrays.sort(A);

        for (int i = n - 1; i >= 0; i--) {

            cost += (A[i] * count);
            count++;
        }

        return cost;
    }
}