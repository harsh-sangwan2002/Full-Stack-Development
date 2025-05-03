import java.util.Arrays;

public class WaveArray {

    private void swap(int[] arr, int x, int y) {

        int temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    public int[] wave(int[] A) {

        Arrays.sort(A);

        swap(A, 0, 1);

        for (int i = 2; i <= A.length - 2; i += 2)
            swap(A, i, i + 1);

        return A;
    }
}
