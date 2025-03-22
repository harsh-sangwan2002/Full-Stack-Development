public class SecondMax {

    public int solve(int[] A) {

        int max = Integer.MIN_VALUE, smax = Integer.MIN_VALUE;

        for (int val : A) {

            if (val > max) {
                smax = max;
                max = val;
            }

            else if (val != max && val > smax)
                smax = val;
        }

        if (smax == max || smax == Integer.MIN_VALUE)
            return -1;

        return smax;
    }
}
