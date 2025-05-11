public class ClosestMinMax {

    private int[] findMaxMin(int[] A) {

        int max = A[0], min = A[0];

        for (int val : A) {
            max = Math.max(max, val);
            min = Math.min(min, val);
        }

        return new int[] { max, min };
    }

    public int solve(int[] A) {

        int n = A.length;
        int[] maxMin = findMaxMin(A);
        int max = maxMin[0], min = maxMin[1];

        if (max == min)
            return 1;

        int last_min_idx = -1, last_max_idx = -1;
        int ans = n;

        for (int i = 0; i < n; i++) {

            int val = A[i];

            if (val == max) {

                if (last_min_idx != -1)
                    ans = Math.min(ans, i - last_min_idx + 1);

                last_max_idx = i;
            }

            else if (val == min) {

                if (last_max_idx != -1)
                    ans = Math.min(ans, i - last_max_idx + 1);

                last_min_idx = i;
            }
        }

        return ans;
    }
}
