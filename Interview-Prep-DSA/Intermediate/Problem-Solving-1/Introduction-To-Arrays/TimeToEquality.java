public class TimeToEquality {

    private int findMax(int[] A) {

        int max = A[0];

        for (int val : A)
            max = Math.max(val, max);

        return max;
    }

    public int solve(int[] A) {

        int max = findMax(A), time = 0;

        for (int val : A)
            time += max - val;

        return time;
    }
}
