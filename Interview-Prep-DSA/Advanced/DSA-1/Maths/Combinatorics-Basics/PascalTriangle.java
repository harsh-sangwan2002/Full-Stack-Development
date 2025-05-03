public class PascalTriangle {
    
    public int[][] solve(int A) {

        int[][] dp = new int[A][A];

        for (int i = 0; i < dp.length; i++) {
            for (int j = 0; j <= i; j++) {

                if (i == 0 || j == 0)
                    dp[i][j] = 1;

                else
                    dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
            }
        }

        return dp;
    }
}
