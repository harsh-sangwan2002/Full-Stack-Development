import java.util.Arrays;

public class TusharBirthdayParty {

    public int solve(final int[] friends, final int[] filling, final int[] cost) {

        int mod = (int) (1e9 + 7);
        int maxCap = Arrays.stream(friends).max().getAsInt();
        int n = filling.length;

        int[] dp = new int[maxCap + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;

        for (int j = 0; j < n; j++) {
            for (int i = filling[j]; i <= maxCap; i++) {
                if (dp[i - filling[j]] != Integer.MAX_VALUE) {
                    dp[i] = Math.min(dp[i], dp[i - filling[j]] + cost[j]);
                }
            }
        }

        int totalCost = 0;
        for (int friend : friends) {
            totalCost = (totalCost + dp[friend]) % mod;
        }

        return totalCost;
    }
}
