import java.util.HashMap;

public class LongestFibonacci {

    public int solve(int[] A) {

        int n = A.length;
        int maxLength = 0;
        HashMap<Integer, Integer> index = new HashMap<>();

        for (int i = 0; i < n; i++) {
            index.put(A[i], i);
        }

        int[][] dp = new int[n][n];

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int k = index.getOrDefault(A[j] - A[i], -1);
                if (k >= 0 && k < i) {
                    dp[i][j] = dp[k][i] + 1;
                    maxLength = Math.max(maxLength, dp[i][j] + 2);
                }
            }
        }

        return maxLength >= 3 ? maxLength : 0;
    }
}
