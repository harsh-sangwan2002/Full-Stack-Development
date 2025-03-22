public class AllocateBooks {

    private int totalPages(int[] A) {

        int pages = 0;

        for (int val : A)
            pages += val;

        return pages;
    }

    private boolean isValid(int[] pages, int mid, int students) {

        int k = 1, currPages = 0;

        for (int page : pages) {

            if (page + currPages <= mid)
                currPages += page;

            else {

                k++;

                if (k > students || page > mid)
                    return false;

                currPages = page;
            }
        }

        return true;
    }

    public int books(int[] A, int B) {

        if (B > A.length)
            return -1;

        int lo = 0, hi = totalPages(A), ans = -1;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;

            if (isValid(A, mid, B)) {
                ans = mid;
                hi = mid - 1;
            }

            else
                lo = mid + 1;
        }

        return ans;
    }
}
