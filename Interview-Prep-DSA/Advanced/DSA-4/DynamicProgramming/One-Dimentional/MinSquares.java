import java.util.Arrays;

public class MinSquares {

    public int countMinSquares(int A) {

        int[] dp = new int[A + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;
        dp[1] = 1;

        for (int i = 2; i <= A; i++) {

            for (int j = 1; j * j <= i; j++)
                dp[i] = Math.min(dp[i], dp[i - j * j]);

            dp[i] += 1;
        }

        return dp[A];
    }
}
