public class InversionCount {

    private long mod = (long) (1e9 + 7);

    private long merge(int[] arr, int mid, int s, int e) {

        int n1 = mid - s + 1;
        int n2 = e - mid;

        int[] left = new int[n1];
        int[] right = new int[n2];

        for (int i = 0; i < n1; i++) {
            left[i] = arr[s + i];
        }

        for (int j = 0; j < n2; j++) {
            right[j] = arr[mid + 1 + j];
        }

        int i = 0, j = 0, k = s;
        long pairs = 0L;

        while (i < n1 && j < n2) {

            if (left[i] <= right[j])
                arr[k++] = left[i++];

            else {
                arr[k++] = right[j++];
                pairs = (pairs + n1 - i) % mod;
            }
        }

        while (i < n1)
            arr[k++] = left[i++];

        while (j < n2)
            arr[k++] = right[j++];

        return pairs;
    }

    private long inversion(int[] arr, int s, int e) {

        if (s >= e)
            return 0L;

        long pairs = 0L;
        int mid = s + (e - s) / 2;
        pairs = (pairs + inversion(arr, s, mid)) % mod;
        pairs = (pairs + inversion(arr, mid + 1, e)) % mod;
        pairs = (pairs + merge(arr, mid, s, e)) % mod;

        return pairs;
    }

    public int solve(int[] A) {

        return (int) (inversion(A, 0, A.length - 1) % mod);
    }
}
