public class ClosestMinMax {

    private int[] findMinMax(int[] A) {

        int min = A[0], max = A[0];

        for (int val : A) {
            min = Math.min(min, val);
            max = Math.max(max, val);
        }

        return new int[] { min, max };
    }

    public int solve(int[] A) {

        int n = A.length, len = A.length;
        int[] minMax = findMinMax(A);
        int min = minMax[0], max = minMax[1];

        if (max == min)
            return 1;

        int last_min_idx = -1, last_max_idx = -1;

        for (int i = 0; i < n; i++) {

            if (A[i] == min) {

                if (last_max_idx != -1)
                    len = Math.min(len, i - last_max_idx + 1);

                last_min_idx = i;
            }

            else if (A[i] == max) {

                if (last_min_idx != -1)
                    len = Math.min(len, i - last_min_idx + 1);

                last_max_idx = i;
            }
        }

        return len;
    }
}