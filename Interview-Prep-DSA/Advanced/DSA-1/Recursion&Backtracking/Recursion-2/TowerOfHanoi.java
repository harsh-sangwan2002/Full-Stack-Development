public class TowerOfHanoi {

    int[][] res;
    int idx;

    private void helper(int n, int t1, int t2, int t3) {

        if (n == 0)
            return;

        helper(n - 1, t1, t3, t2);

        res[idx++] = new int[] { n, t1, t3 };

        helper(n - 1, t2, t1, t3);
    }

    public int[][] towerOfHanoi(int A) {

        res = new int[(1 << A) - 1][3];
        idx = 0;

        helper(A, 1, 2, 3);
        return res;
    }
}
