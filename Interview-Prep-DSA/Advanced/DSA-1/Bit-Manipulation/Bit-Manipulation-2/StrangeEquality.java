public class StrangeEquality {

    private boolean check(int n) {

        if ((n & 1) != 0)
            return true;

        return false;
    }

    public int solve(int A) {

        int bits = 0, temp = A;

        while (temp != 0) {

            bits++;
            temp = temp >> 1;
        }

        int Y = (1 << bits), pos = 0, X = 0;

        while (A != 0) {

            if (!check(A))
                X += (1 << pos);

            pos++;
            A = A >> 1;
        }

        return X ^ Y;
    }
}
