public class ReverseInRange {

    private void swap(int[] arr, int i, int j) {

        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public int[] solve(int[] A, int B, int C) {

        while (B < C) {

            swap(A, B, C);
            B++;
            C--;
        }

        return A;
    }
}
