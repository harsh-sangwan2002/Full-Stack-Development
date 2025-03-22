public class DistinctSubsequences {

    public int numDistinct(String A, String B) {

        int n = A.length(), m = B.length();
        int[][] dp = new int[n + 1][m + 1];

        for (int i = 0; i < dp.length; i++) {

            for (int j = 0; j < dp[0].length; j++) {

                if (j == 0)
                    dp[i][j] = 1;

                else if (i == 0)
                    dp[i][j] = 0;

                else if (A.charAt(i - 1) == B.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];

                else
                    dp[i][j] = dp[i - 1][j];
            }
        }

        return dp[n][m];
    }
}
