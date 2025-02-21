public class RotateMatrix {

    private void swap(int[] A, int i, int j) {

        int temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }

    private void transpose(int[][] A) {

        for (int i = 0; i < A.length; i++) {

            for (int j = 0; j < i; j++) {
                int temp = A[i][j];
                A[i][j] = A[j][i];
                A[j][i] = temp;
            }
        }
    }

    private void reverse(int[] A) {

        int lo = 0, hi = A.length - 1;
        while (lo < hi) {

            swap(A, lo, hi);
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
