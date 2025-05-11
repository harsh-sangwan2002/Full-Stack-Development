public class EquilibriumIndex {

    public int solve(int[] A) {

        int n = A.length;
        long[] pre = new long[n];

        for (int i = 0; i < n; i++) {

            if (i == 0)
                pre[i] = (long) A[i];

            else
                pre[i] = pre[i - 1] + A[i];
        }

        for (int i = 0; i < n; i++) {

            long left = 0, right = 0;

            if (i == 0)
                right = pre[n - 1] - pre[0];

            else {
                left = pre[i - 1];
                right = pre[n - 1] - pre[i];
            }

            if (left == right)
                return i;
        }

        return -1;
    }
}
