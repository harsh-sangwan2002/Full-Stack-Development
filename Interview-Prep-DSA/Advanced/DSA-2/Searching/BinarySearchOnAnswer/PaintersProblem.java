public class PaintersProblem {

    private boolean isValid(int[] boards, int painters, long mid) {

        int curr = 0, k = 1;

        for (int i = 0; i < boards.length; i++) {

            if (curr + boards[i] <= mid) {
                curr += boards[i];
            }

            else {

                k++;

                if (k > painters || boards[i] > mid)
                    return false;

                curr = boards[i];
            }
        }

        return true;
    }

    public int paint(int A, int B, int[] C) {

        long lo = 0, hi = (long) (1e9 + 7), ans = lo, mod = (long) (1e7 + 3);

        while (lo <= hi) {

            long mid = (lo + (hi - lo) / 2) % mod;

            if (isValid(C, A, mid)) {
                ans = mid % mod;
                hi = mid - 1;
            }

            else
                lo = mid + 1;
        }

        return (int) ((ans * B) % mod);
    }
}
