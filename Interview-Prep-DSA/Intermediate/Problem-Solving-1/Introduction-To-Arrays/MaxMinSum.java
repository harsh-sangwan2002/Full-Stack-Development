public class MaxMinSum {

    private int[] findMaxMin(int[] A) {

        int max = A[0], min = A[0];

        for (int val : A) {
            max = Math.max(max, val);
            min = Math.min(min, val);
        }

        return new int[] { max, min };
    }

    public int solve(int[] A) {

        int[] maxMin = findMaxMin(A);
        return maxMin[0] + maxMin[1];
    }
}
