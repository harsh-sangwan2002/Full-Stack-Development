public class WaysToDecode {

    public int numDecodings(String A) {

        if (A == null || A.length() == 0 || A.charAt(0) == '0')
            return 0;

        int n = A.length();
        long[] dp = new long[n + 1];
        long mod = 1000000007;

        dp[0] = 1;
        dp[1] = (A.charAt(0) != '0') ? 1 : 0;

        for (int i = 2; i <= n; i++) {
            char ch1 = A.charAt(i - 1);
            char ch2 = A.charAt(i - 2);

            if (ch1 >= '1' && ch1 <= '9') {
                dp[i] = dp[i - 1] % mod;
            }

            int num = (ch2 - '0') * 10 + (ch1 - '0');
            if (num >= 10 && num <= 26) {
                dp[i] = (dp[i] + dp[i - 2]) % mod;
            }
        }

        return (int) dp[n];
    }
}
