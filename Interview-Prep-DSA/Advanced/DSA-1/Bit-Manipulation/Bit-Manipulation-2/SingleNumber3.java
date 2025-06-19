import java.util.Arrays;

public class SingleNumber3 {

    private boolean checkBit(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        return false;
    }

    public int[] solve(int[] A) {

        int xor = 0;

        for (int val : A)
            xor ^= val;

        int pos = 0;
        while (xor != 0) {

            if (checkBit(xor, 0))
                break;

            pos++;
            xor = xor >> 1;
        }

        int set = 0, unset = 0;

        for (int val : A) {

            if (checkBit(val, pos))
                set ^= val;

            else
                unset ^= val;
        }

        int[] res = new int[2];
        res[0] = set;
        res[1] = unset;
        Arrays.sort(res);

        return res;
    }
}
