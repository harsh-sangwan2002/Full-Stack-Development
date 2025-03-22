public class SearchForRange {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY

    private int leftIndex(int[] arr, int tar) {

        int lo = 0, hi = arr.length - 1, ans = -1;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;

            if (arr[mid] == tar) {
                ans = mid;
                hi = mid - 1;
            }

            else if (arr[mid] > tar)
                hi = mid - 1;

            else
                lo = mid + 1;
        }

        return ans;
    }

    private int rightIndex(int[] arr, int tar) {

        int lo = 0, hi = arr.length - 1, ans = -1;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;

            if (arr[mid] == tar) {
                ans = mid;
                lo = mid + 1;
            }

            else if (arr[mid] > tar)
                hi = mid - 1;

            else
                lo = mid + 1;
        }

        return ans;
    }

    public int[] searchRange(final int[] A, int B) {

        int fi = leftIndex(A, B);
        int ri = rightIndex(A, B);

        return new int[] { fi, ri };
    }
}
