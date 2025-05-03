public class IntersectionChords {

    public int chordCnt(int A) {

        long[] dp = new long[A + 1];
        long mod = (long) (1e9 + 7);
        dp[0] = 1L;
        dp[1] = 1L;

        for (int i = 2; i <= A; i++) {

            for (int j = 0; j < i; j++) {

                dp[i] = (dp[i] + (dp[j] * dp[i - j - 1]) % mod) % mod;
            }
        }

        return (int) dp[A];
    }
}
