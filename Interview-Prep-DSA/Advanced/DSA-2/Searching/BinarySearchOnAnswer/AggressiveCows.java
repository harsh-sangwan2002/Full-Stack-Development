import java.util.Arrays;

public class AggressiveCows {

    private int[] findMaxMin(int[] arr) {

        int max = arr[0], min = arr[0];

        for (int val : arr) {
            max = Math.max(max, val);
            min = Math.min(min, val);
        }

        return new int[] { max, min };
    }

    private boolean isValid(int[] arr, int mid, int cows) {

        int last_placed = arr[0];
        int k = 1;

        for (int i = 1; i < arr.length; i++) {

            if (arr[i] - last_placed >= mid) {
                last_placed = arr[i];
                k++;

                if (k == cows)
                    return true;
            }
        }

        return false;
    }

    public int solve(int[] A, int B) {

        Arrays.sort(A);
        int[] maxMin = findMaxMin(A);
        int max = maxMin[0], min = maxMin[1];
        int lo = 0, hi = max - min, ans = lo;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;

            if (isValid(A, mid, B)) {
                ans = mid;
                lo = mid + 1;
            }

            else
                hi = mid - 1;
        }

        return ans;
    }
}
