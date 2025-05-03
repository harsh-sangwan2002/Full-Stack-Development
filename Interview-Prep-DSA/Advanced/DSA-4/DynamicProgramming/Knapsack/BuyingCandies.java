public class BuyingCandies {

    public int solve(int[] A, int[] B, int[] C, int D) {

        int n = A.length;
        int[][] dp = new int[n + 1][D + 1];

        for (int i = 1; i <= n; i++) {

            for (int j = 1; j <= D; j++) {

                if (j < C[i - 1])
                    dp[i][j] = dp[i - 1][j];

                else {

                    int exclude = dp[i - 1][j];

                    int include = A[i - 1] * B[i - 1];
                    include += dp[i][j - C[i - 1]];

                    dp[i][j] = Math.max(include, exclude);
                }
            }
        }

        return dp[n][D];
    }
}
