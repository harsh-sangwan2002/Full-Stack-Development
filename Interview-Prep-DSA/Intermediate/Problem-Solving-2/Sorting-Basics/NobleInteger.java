import java.util.Arrays;

public class NobleInteger {

    private void reverse(int[] A) {

        int lo = 0, hi = A.length - 1;

        while (lo <= hi) {
            int temp = A[lo];
            A[lo] = A[hi];
            A[hi] = temp;

            lo++;
            hi--;
        }
    }

    public int solve(int[] A) {

        Arrays.sort(A);
        reverse(A);

        if (A[0] == 0)
            return 1;

        int count = 0;

        for (int i = 1; i < A.length; i++) {

            if (A[i] != A[i - 1])
                count = i;

            if (A[i] == count)
                return 1;
        }

        return -1;
    }
}
