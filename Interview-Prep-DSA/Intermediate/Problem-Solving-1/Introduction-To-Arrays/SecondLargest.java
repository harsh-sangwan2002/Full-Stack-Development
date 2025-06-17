public class SecondLargest {

    public int solve(int[] A) {

        int max = Integer.MIN_VALUE, smax = Integer.MIN_VALUE;

        for (int val : A) {

            if (val > max) {
                smax = max;
                max = val;
            }

            else if (val > smax && val != max)
                smax = val;
        }

        return smax == Integer.MIN_VALUE ? -1 : smax;
    }
}
