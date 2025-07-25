public class NextPermutation {

    private void swap(int[] A, int i, int j) {

        int temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }

    private void reverse(int[] A, int lo, int hi) {

        while (lo < hi) {
            int temp = A[lo];
            A[lo] = A[hi];
            A[hi] = temp;

            lo++;
            hi--;
        }
    }

    public int[] nextPermutation(int[] A) {

        int i = A.length - 2;

        while (i >= 0 && A[i] >= A[i + 1])
            i--;

        if (i < 0) {
            reverse(A, 0, A.length - 1);
            return A;
        }

        int j = A.length - 1;
        while (j >= 0 && A[j] <= A[i])
            j--;

        swap(A, i, j);
        reverse(A, i + 1, A.length - 1);
        return A;
    }
}
