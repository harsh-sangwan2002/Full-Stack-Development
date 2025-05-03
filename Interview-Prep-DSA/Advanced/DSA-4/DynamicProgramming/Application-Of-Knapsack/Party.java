public class Party {

    public int solve(int A) {

        long[] dp = new long[A + 1];
        long mod = (long) (1e4 + 3);
        dp[0] = 1L;
        dp[1] = 1L;

        for (int i = 2; i <= A; i++) {
            dp[i] = dp[i - 1] % mod;
            dp[i] = (dp[i] + (i - 1) * dp[i - 2]) % mod;
        }

        return (int) dp[A];
    }
}