public class ArrayRotation {

    private void reverse(int[] A, int lo, int hi) {

        while (lo < hi) {
            int temp = A[lo];
            A[lo] = A[hi];
            A[hi] = temp;

            lo++;
            hi--;
        }
    }

    public int[] solve(int[] A, int B) {

        int n = A.length;
        B = B % n;

        reverse(A, 0, A.length - 1);
        reverse(A, 0, B - 1);
        reverse(A, B, A.length - 1);

        return A;
    }
}
