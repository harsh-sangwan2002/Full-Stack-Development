public class Knapsack2 {

    public int solve(int[] A, int[] B, int C) {

        int n = A.length;

        int maxSum = 0;
        for (int val : A) {
            maxSum += val;
        }

        int[][] dp = new int[n + 1][maxSum + 1];

        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= maxSum; j++) {
                dp[i][j] = Integer.MAX_VALUE / 2;
            }
        }
        dp[0][0] = 0;

        for (int i = 1; i <= n; i++) {
            for (int j = 0; j <= maxSum; j++) {

                dp[i][j] = dp[i - 1][j];

                if (j >= A[i - 1]) {
                    dp[i][j] = Math.min(dp[i][j], B[i - 1] + dp[i - 1][j - A[i - 1]]);
                }
            }
        }

        int ans = 0;
        for (int j = 0; j <= maxSum; j++) {
            if (dp[n][j] <= C) {
                ans = j;
            }
        }

        return ans;
    }
}
