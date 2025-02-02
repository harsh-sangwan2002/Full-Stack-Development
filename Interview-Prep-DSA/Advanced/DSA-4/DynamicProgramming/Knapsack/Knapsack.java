public class Knapsack {

    public int solve(int[] val, int[] wt, int C) {

        int N = val.length;
        int[][] dp = new int[N + 1][C + 1];

        for (int i = 1; i <= N; i++) {

            for (int j = 1; j <= C; j++) {

                int exclude = dp[i - 1][j];
                int include = 0;

                if (j >= wt[i - 1])
                    include = val[i - 1] + dp[i - 1][j - wt[i - 1]];

                dp[i][j] = Math.max(include, exclude);
            }
        }

        return dp[N][C];
    }
}
