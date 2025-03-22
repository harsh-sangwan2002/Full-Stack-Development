public class CountRectangles {

    public int solve(int[] A, int B) {

        long ans = 0, mod = (long) (1e9 + 7);
        int i = 0, j = A.length - 1;

        while (i <= j) {

            long area = A[i] * 1L * A[j];

            if (i == j) {

                if (area < B)
                    ans = (ans + 1) % mod;

                return (int) ans;
            }

            else if (area < B) {

                int len = j - i;
                ans = (ans + len * 1L * 2 + 1) % mod;
                i++;
            }

            else
                j--;
        }

        return (int) ans;
    }
}
