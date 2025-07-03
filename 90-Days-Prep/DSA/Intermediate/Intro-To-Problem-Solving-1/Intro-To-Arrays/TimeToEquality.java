// TC -> O(N)
// SC -> O(1)
public class TimeToEquality {

    private int findMax(int[] A) {

        int max = A[0];

        for (int val : A)
            max = Math.max(max, val);

        return max;
    }

    public int solve(int[] A) {

        int time = 0, max = findMax(A);

        for (int val : A)
            time += max - val;

        return time;
    }
}
