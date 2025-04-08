public class ClosestMinMax {

    private int[] findMinMax(int[] A) {

        int max = A[0], min = A[0];

        for (int val : A) {
            max = Math.max(max, val);
            min = Math.min(min, val);
        }

        return new int[] { min, max };
    }

    public int solve(int[] A) {

        int[] minMax = findMinMax(A);
        int min = minMax[0], max = minMax[1];
        int n = A.length, ans = A.length, last_min_idx = -1, last_max_idx = -1;

        if (max == min)
            return 1;

        for (int i = 0; i < n; i++) {

            int val = A[i];

            if (val == min) {

                if (last_max_idx != -1)
                    ans = Math.min(ans, i - last_max_idx + 1);

                last_min_idx = i;
            }

            else if (val == max) {

                if (last_min_idx != -1)
                    ans = Math.min(ans, i - last_min_idx + 1);

                last_max_idx = i;
            }
        }

        return ans;
    }
}
