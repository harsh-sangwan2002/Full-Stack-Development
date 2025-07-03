// TC -> O(N)
// SC -> O(N)
public class RangeSumQuery {

    public long[] rangeSum(int[] A, int[][] B) {

        int n = A.length;
        long[] preSum = new long[n];
        long[] res = new long[B.length];

        for (int i = 0; i < n; i++) {

            if (i == 0)
                preSum[i] = (long) A[i];

            else
                preSum[i] = preSum[i - 1] + A[i];
        }

        for (int i = 0; i < B.length; i++) {

            int st = B[i][0], et = B[i][1];

            if (st == 0)
                res[i] = preSum[et];

            else
                res[i] = preSum[et] - preSum[st - 1];
        }

        return res;
    }
}
