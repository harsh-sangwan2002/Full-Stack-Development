public class ArrayRotation {

    private void swap(int[] arr, int i, int j) {

        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    private void reverse(int[] arr, int lo, int hi) {

        while (lo < hi) {
            swap(arr, lo, hi);
            lo++;
            hi--;
        }
    }

    public int[] solve(int[] A, int B) {

        B = B % A.length;

        int n = A.length;
        reverse(A, 0, n - 1);
        reverse(A, 0, B - 1);
        reverse(A, B, n - 1);

        return A;
    }
}
