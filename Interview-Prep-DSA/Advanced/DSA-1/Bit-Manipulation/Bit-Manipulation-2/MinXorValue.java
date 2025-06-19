import java.util.Arrays;

public class MinXorValue {

    public int findMinXor(int[] A) {

        Arrays.sort(A);
        int n = A.length, minVal = A[0] ^ A[1];

        for (int i = 2; i < n; i++) {

            int xor = A[i] ^ A[i - 1];
            minVal = Math.min(minVal, xor);
        }

        return minVal;
    }
}
