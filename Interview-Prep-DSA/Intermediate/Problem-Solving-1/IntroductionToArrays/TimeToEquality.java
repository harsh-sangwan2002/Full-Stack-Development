public class TimeToEquality {

    public int solve(int[] A) {

        int time = 0, max = A[0];

        for (int val : A)
            max = Math.max(max, val);

        for (int val : A)
            time += (max - val);

        return time;
    }
}
