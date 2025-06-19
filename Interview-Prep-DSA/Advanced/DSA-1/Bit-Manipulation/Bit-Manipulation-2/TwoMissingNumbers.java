import java.util.Arrays;

public class TwoMissingNumbers {

    private boolean checkBit(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        return false;
    }

    public int[] solve(int[] A) {

        int n = A.length, xor = 0;

        for (int val : A)
            xor ^= val;

        for (int i = 1; i <= n + 2; i++)
            xor ^= i;

        int pos = 0;
        while (xor != 0) {

            if (checkBit(xor, 0))
                break;

            xor = xor >> 1;
            pos++;
        }

        int set = 0, unset = 0;
        for (int val : A) {

            if (checkBit(val, pos))
                set ^= val;

            else
                unset ^= val;
        }

        for (int i = 1; i <= n + 2; i++) {

            if (checkBit(i, pos))
                set ^= i;

            else
                unset ^= i;
        }

        int[] res = new int[2];
        res[0] = set;
        res[1] = unset;
        Arrays.sort(res);

        return res;
    }
}
