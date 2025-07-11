public class CountOfElements {

    private int findMax(int[] A) {

        int max = A[0];

        for (int val : A)
            max = Math.max(val, max);

        return max;
    }

    public int solve(int[] A) {

        int max = findMax(A), count = 0;

        for (int val : A) {
            if (val != max)
                count++;
        }

        return count;
    }
}
