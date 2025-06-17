public class PickFromBothSides {

    public int solve(int[] A, int B) {

        int n = A.length;
        int[] preSum = new int[n], sufSum = new int[n];

        for (int i = 0; i < n; i++) {

            if (i == 0)
                preSum[i] = A[i];

            else
                preSum[i] = preSum[i - 1] + A[i];
        }

        for (int i = n - 1; i >= 0; i--) {

            if (i == n - 1)
                sufSum[i] = A[i];

            else
                sufSum[i] = sufSum[i + 1] + A[i];
        }

        int maxSum = Math.max(preSum[B - 1], sufSum[n - B]);

        for (int i = 1; i < B; i++) {
            int currSum = preSum[i - 1] + sufSum[n - B + i];
            maxSum = Math.max(maxSum, currSum);
        }

        return maxSum;
    }
}
