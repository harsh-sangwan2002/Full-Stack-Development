public class FlipArray {

    private class Pair {

        int sum;
        int flips;

        Pair(int sum, int flips) {
            this.sum = sum;
            this.flips = flips;
        }
    }

    private Pair compare(Pair include, Pair exclude) {

        if (include.sum > exclude.sum)
            return include;

        else if (include.sum < exclude.sum)
            return exclude;

        else if (include.flips < exclude.flips)
            return include;

        else
            return exclude;
    }

    private void flillDP(Pair[][] dp) {

        for (int i = 0; i < dp.length; i++) {

            for (int j = 0; j < dp[0].length; j++)
                dp[i][j] = new Pair(0, 0);
        }
    }

    public int solve(final int[] A) {

        int n = A.length, sum = 0;

        for (int val : A)
            sum += val;

        Pair[][] dp = new Pair[n + 1][sum / 2 + 1];
        flillDP(dp);

        for (int i = 1; i <= n; i++) {

            for (int j = 0; j <= sum / 2; j++) {

                if (j < A[i - 1])
                    dp[i][j] = dp[i - 1][j];

                else {

                    Pair exclude = dp[i - 1][j];

                    int add = A[i - 1] + dp[i - 1][j - A[i - 1]].sum;
                    int flips = 1 + dp[i - 1][j - A[i - 1]].flips;
                    Pair include = new Pair(add, flips);

                    dp[i][j] = compare(include, exclude);
                }
            }
        }

        return dp[n][sum / 2].flips;
    }
}
