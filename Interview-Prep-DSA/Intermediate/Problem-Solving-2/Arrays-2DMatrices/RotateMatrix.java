public class RotateMatrix {

    private void transpose(int[][] A) {

        int n = A.length, m = n;

        for (int i = 0; i < n; i++) {
            for (int j = i; j < m; j++) {
                int temp = A[i][j];
                A[i][j] = A[j][i];
                A[j][i] = temp;
            }
        }
    }

    private void reverse(int[] A) {

        int lo = 0, hi = A.length - 1;

        while (lo < hi) {
            int temp = A[lo];
            A[lo] = A[hi];
            A[hi] = temp;

            lo++;
            hi--;
        }
    }

    public void solve(int[][] A) {

        transpose(A);

        for (int[] arr : A)
            reverse(arr);
    }
}
