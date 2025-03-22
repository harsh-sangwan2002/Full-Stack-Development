public class SpecialInteger {

    private boolean isValid(int[] A, int tar, int size) {

        long sum = 0;

        for (int i = 0; i < size && i < A.length; i++)
            sum = sum + A[i];

        if (sum > tar)
            return false;

        for (int i = size; i < A.length; i++) {

            sum -= A[i - size];
            sum += A[i];

            if (sum > tar)
                return false;
        }

        return true;
    }

    public int solve(int[] A, int B) {

        int lo = 1, hi = A.length, ans = 0;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;

            if (isValid(A, B, mid)) {
                ans = mid;
                lo = mid + 1;
            }

            else
                hi = mid - 1;
        }

        return ans;
    }
}
