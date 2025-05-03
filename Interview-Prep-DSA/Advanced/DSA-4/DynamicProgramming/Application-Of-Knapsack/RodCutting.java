public class RodCutting {

    public int solve(int[] A) {

        int n = A.length;
        int[] dp = new int[n + 1];

        for (int i = 1; i <= n; i++) {

            for (int j = 1; j <= i; j++)
                dp[i] = Math.max(dp[i], dp[i - j] + A[j - 1]);
        }

        return dp[n];
    }
}
