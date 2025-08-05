// TC -> O(N)
// SC -> O(1)
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
        int min = minMax[0], max = minMax[1], n = A.length, res = n;
        int last_min_idx = -1, last_max_idx = -1;

        if (max == min)
            return 1;

        for (int i = 0; i < n; i++) {

            if (A[i] == min) {

                if (last_max_idx != -1)
                    res = Math.min(res, i - last_max_idx + 1);

                last_min_idx = i;
            }

            else if (A[i] == max) {

                if (last_min_idx != -1)
                    res = Math.min(res, i - last_min_idx + 1);

                last_max_idx = i;
            }
        }

        return res;
    }
}
