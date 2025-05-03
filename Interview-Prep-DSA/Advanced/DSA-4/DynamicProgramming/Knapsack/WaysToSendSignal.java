public class WaysToSendSignal {

    public int solve(int A) {

        if (A == 1)
            return 2;
        if (A == 2)
            return 3;

        long a = 2, b = 3, mod = (long) (1e9 + 7);

        for (int i = 3; i <= A; i++) {
            long c = (a + b) % mod;
            a = b;
            b = c;
        }

        return (int) b;
    }
}
