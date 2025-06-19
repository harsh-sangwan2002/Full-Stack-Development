public class UnsetBits {

    private boolean checkBit(long A, int pos) {

        if ((A & (1 << pos)) != 0)
            return true;

        return false;
    }

    private long toggleBit(long A, int pos) {

        return (long) (A ^ (1 << pos));
    }

    public long solve(long A, int B) {

        for (int pos = 0; pos < B; pos++) {

            if (checkBit(A, pos))
                A = toggleBit(A, pos);
        }

        return A;
    }
}
