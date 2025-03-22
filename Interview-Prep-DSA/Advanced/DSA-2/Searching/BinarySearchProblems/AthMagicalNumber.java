public class AthMagicalNumber {

    static long mod = (long) (1e9 + 7);

    private long GCD(int a, int b) {

        if (a == 0)
            return 1L * b;
        if (b == 0)
            return 1L * a;

        return (long) (GCD(b, a % b) % mod);
    }

    public int solve(int A, int B, int C) {

        long gcd = GCD(B, C);
        long mul = 1L * B * C;
        long lcm = mul / gcd;

        long lo = 1L * Math.min(B, C), hi = lo * A, ans = 0L;

        while (lo <= hi) {

            long mid = lo + (hi - lo) / 2;
            long count = mid / B + mid / C - mid / lcm;

            if (count < A)
                lo = mid + 1;

            else {
                ans = mid % mod;
                hi = mid - 1;
            }
        }

        return (int) (ans % mod);
    }
}
