public class MinimumSwaps {
    
    public int solve(int[] A, int B) {

        int count = 0;

        for (int val : A) {
            if (val <= B)
                count++;
        }

        if (count == 0)
            return 0;

        int bad = 0, swaps = 0;
        for (int i = 0; i < count; i++) {
            if (A[i] > B)
                bad++;
        }

        swaps = bad;
        for (int i = count; i < A.length; i++) {

            int prev = A[i - count];
            if (prev > B)
                bad--;

            if (A[i] > B)
                bad++;

            swaps = Math.min(swaps, bad);
        }

        return swaps;
    }
}
