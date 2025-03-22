import java.util.Arrays;

public class UniquePathInGrid {

    private void fillDP(int[][] dp) {

        for (int i = 0; i < dp.length; i++)
            Arrays.fill(dp[i], -1);
    }

    private int helper(int[][] A, int x, int y, int[][] dp) {

        if (x < 0 || y < 0 || x >= A.length || y >= A[0].length || A[x][y] == 1)
            return 0;

        if (x == A.length - 1 && y == A[0].length - 1 && A[x][y] == 0)
            return 1;

        if (dp[x][y] != -1)
            return dp[x][y];

        return dp[x][y] = helper(A, x + 1, y, dp) + helper(A, x, y + 1, dp);
    }

    public int uniquePathsWithObstacles(int[][] A) {

        int n = A.length, m = A[0].length;
        int[][] dp = new int[n][m];
        fillDP(dp);

        return helper(A, 0, 0, dp);
    }
}
