package MaxHeightStairCase;

public class sol2 {

    public int solve(int A) {

        if (A == 0)
            return 0;

        int lo = 0, hi = A, ans = 1;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;
            long sum = 1L * (mid) * (mid + 1) / 2;

            if (sum <= A) {
                lo = mid + 1;
                ans = mid;
            }

            else
                hi = mid - 1;
        }

        return ans;
    }
}
