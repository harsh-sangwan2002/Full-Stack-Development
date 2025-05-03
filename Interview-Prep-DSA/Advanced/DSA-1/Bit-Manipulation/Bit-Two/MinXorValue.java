import java.util.Arrays;

public class MinXorValue {
    
    public int findMinXor(int[] A) {

        Arrays.sort(A);
        int min = A[0] ^ A[1];

        for (int i = 2; i < A.length; i++) {

            int curr = A[i - 1] ^ A[i];
            min = Math.min(min, curr);
        }

        return min;
    }
}
