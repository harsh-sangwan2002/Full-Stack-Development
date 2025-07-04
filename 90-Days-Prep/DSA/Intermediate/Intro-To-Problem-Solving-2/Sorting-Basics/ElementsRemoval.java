import java.util.Arrays;

// TC -> O(N*log(N))
// SC -> O(log(N))
public class ElementsRemoval {

    public int solve(int[] A) {

        Arrays.sort(A);
        int count = 1, cost = 0, n = A.length;

        for (int i = n - 1; i >= 0; i--) {
            cost += A[i] * count;
            count++;
        }

        return cost;
    }
}
