public class RangeSumQuery {

    public long[] rangeSum(int[] A, int[][] B) {

        int n = B.length;

        long[] pre = new long[A.length];
        pre[0] = A[0] * 1L;

        long[] res = new long[n];

        for (int i = 1; i < A.length; i++)
            pre[i] = pre[i - 1] + A[i];

        for (int i = 0; i < n; i++) {

            int st = B[i][0], et = B[i][1];

            if (st == 0)
                res[i] = pre[et];

            else
                res[i] = pre[et] - pre[st - 1];
        }

        return res;
    }
}
