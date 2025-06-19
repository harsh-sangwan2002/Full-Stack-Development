public class Permutations {

    private int[][] res;
    private int idx1;
    private boolean[] vis;

    private int factorial(int n) {

        if (n == 0 || n == 1)
            return 1;

        return n * factorial(n - 1);
    }

    private void solve(int[] arr, int[] ans, int idx2) {

        if (idx2 == arr.length) {

            int[] temp = new int[ans.length];
            int curr = 0;

            for (int val : ans)
                temp[curr++] = val;

            res[idx1++] = temp;
            return;
        }

        for (int i = 0; i < arr.length; i++) {

            if (!vis[i]) {
                ans[idx2] = arr[i];
                vis[i] = true;
                solve(arr, ans, idx2 + 1);
                vis[i] = false;
            }
        }
    }

    public int[][] permute(int[] A) {

        int n = A.length;

        res = new int[factorial(n)][n];
        idx1 = 0;
        vis = new boolean[A.length];

        solve(A, new int[A.length], 0);

        return res;
    }
}
