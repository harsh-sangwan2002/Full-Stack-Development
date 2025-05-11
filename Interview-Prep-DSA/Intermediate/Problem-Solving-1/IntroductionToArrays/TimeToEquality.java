public class TimeToEquality {

    public int solve(int[] A) {

        int max = A[0], time = 0;

        for (int val : A)
            max = Math.max(max, val);

        for (int val : A)
            time += (max - val);

        return time;
    }
}
