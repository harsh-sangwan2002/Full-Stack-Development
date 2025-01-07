import java.util.Arrays;

public class SingleNumber3 {

    private boolean check(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        else
            return false;
    }

    public int[] solve(int[] A) {

        int xor = 0;

        for (int val : A)
            xor ^= val;

        int pos = 0;
        while (xor != 0) {

            if (check(xor, pos))
                break;

            pos++;
        }

        int set = 0, unset = 0;
        for (int i = 0; i < A.length; i++) {

            if (check(A[i], pos))
                set ^= A[i];

            else
                unset ^= A[i];
        }

        int[] arr = new int[2];
        arr[0] = set;
        arr[1] = unset;
        Arrays.sort(arr);

        return arr;
    }
}
