public class SubarrayOr {

    private boolean checkBit(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        return false;
    }

    public int solve(int[] A) {

        long ans = 0L, mod = (long) (1e9 + 7);
        int n = A.length;

        for (int i = 0; i < 32; i++) {

            int bit = 0;
            for (int j = 0; j < n; j++) {

                if (checkBit(A[j], i))
                    bit = j + 1;

                long contri = 1L * (bit) * (1 << i) % mod;
                ans = (ans + contri) % mod;
            }
        }

        return (int) ans;
    }
}
