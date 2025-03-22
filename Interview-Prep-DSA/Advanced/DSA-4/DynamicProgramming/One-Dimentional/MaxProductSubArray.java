public class MaxProductSubArray {
    
    public int maxProduct(final int[] A) {

        int n = A.length, ans = A[0];
        int[] dp1 = new int[n];
        int[] dp2 = new int[n];
        dp1[0] = A[0];
        dp2[0] = A[0];

        for (int i = 1; i < n; i++) {

            int a = A[i], b = A[i] * dp1[i - 1], c = A[i] * dp2[i - 1];

            dp1[i] = Math.min(a, Math.min(b, c));
            dp2[i] = Math.max(a, Math.max(b, c));

            ans = Math.max(ans, Math.max(dp1[i], dp2[i]));
        }

        return ans;
    }
}
