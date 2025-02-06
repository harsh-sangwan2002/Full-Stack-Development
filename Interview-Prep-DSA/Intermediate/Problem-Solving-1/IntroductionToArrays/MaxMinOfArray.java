public class MaxMinOfArray {

    public int solve(int[] A) {

        int min = A[0], max = A[0];

        for (int val : A) {
            min = Math.min(val, min);
            max = Math.max(val, max);
        }

        return max + min;
    }
}
