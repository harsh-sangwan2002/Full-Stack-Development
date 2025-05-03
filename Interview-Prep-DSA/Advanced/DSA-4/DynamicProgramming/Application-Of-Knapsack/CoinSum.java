public class CoinSum {

    public int coinchange2(int[] A, int B) {

        long mod = (long) (1e6 + 7);
        long[] dp = new long[B + 1];
        int n = A.length;
        dp[0] = 1L;

        for (int i = 0; i < n; i++) {

            for (int j = 1; j <= B; j++) {

                if (j >= A[i])
                    dp[j] = (dp[j] + dp[j - A[i]]) % mod;
            }
        }

        return (int) dp[B];
    }
}
