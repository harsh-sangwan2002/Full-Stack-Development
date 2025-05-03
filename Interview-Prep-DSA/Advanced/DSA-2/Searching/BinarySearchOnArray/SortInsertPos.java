public class SortInsertPos {

    public int searchInsert(int[] A, int B) {

        int lo = 0, hi = A.length - 1;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;

            if (A[mid] == B)
                return mid;

            else if (A[mid] > B)
                hi = mid - 1;

            else
                lo = mid + 1;
        }

        return lo;
    }
}
