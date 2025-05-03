public class UnboundedKnapsack {

    public int solve(int A, int[] B, int[] C) {

        int n = B.length;
        int[] dp = new int[A + 1];

        for (int i = 0; i <= A; i++) {

            int max = 0;

            for (int j = 0; j < n; j++) {

                if (i >= C[j])
                    max = Math.max(max, B[j] + dp[i - C[j]]);
            }

            dp[i] = max;
        }

        return dp[A];
    }
}
