public class SecondLargestElement {

    public int solve(int[] A) {

        int max = Integer.MIN_VALUE, smax = max;

        for (int val : A) {

            if (val > max) {
                smax = max;
                max = val;
            }

            else if (val != max && val > smax)
                smax = val;
        }

        return smax == Integer.MIN_VALUE ? -1 : smax;
    }
}
