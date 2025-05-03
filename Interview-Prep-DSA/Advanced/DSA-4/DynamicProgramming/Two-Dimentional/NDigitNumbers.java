public class NDigitNumbers {

    private static long mod = (long) (1e9 + 7);

    private long helper(int digits, int sum, long[][] dp) {

        if (digits < 0 || sum < 0)
            return 0L;

        if (digits == 0 && sum == 0)
            return dp[digits][sum] = 1L;

        if (dp[digits][sum] != -1)
            return dp[digits][sum];

        long ans = 0L;

        for (int i = 0; i <= 9; i++)
            ans = (ans + helper(digits - 1, sum - i, dp)) % mod;

        return dp[digits][sum] = ans;
    }

    private void fillDP(long[][] dp) {

        for (int i = 0; i < dp.length; i++) {

            for (int j = 0; j < dp[0].length; j++)
                dp[i][j] = -1L;
        }
    }

    public int solve(int A, int B) {

        long[][] dp = new long[A + 1][B + 1];
        long ans = 0L;
        fillDP(dp);

        for (int i = 1; i <= 9; i++)
            ans = (ans + helper(A - 1, B - i, dp)) % mod;

        return (int) ans;
    }
}