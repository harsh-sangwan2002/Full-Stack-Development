public class RotateMatrix {

    private void swap(int[] A, int x, int y) {

        int temp = A[x];
        A[x] = A[y];
        A[y] = temp;
    }

    private void reverse(int[] A) {

        int lo = 0, hi = A.length - 1;

        while (lo <= hi) {
            swap(A, lo, hi);
            lo++;
            hi--;
        }
    }

    private void transpose(int[][] A) {

        for (int i = 0; i < A.length; i++) {

            for (int j = i; j < A[0].length; j++) {
                int temp = A[i][j];
                A[i][j] = A[j][i];
                A[j][i] = temp;
            }
        }
    }

    public void solve(int[][] A) {

        transpose(A);

        for (int[] arr : A)
            reverse(arr);
    }
}
