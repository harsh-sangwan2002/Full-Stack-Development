public class MaxAndPair {

    private boolean check(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        else
            return false;
    }

    public int solve(int[] A) {

        int res = 0;

        for (int i = 31; i >= 0; i--) {

            int count = 0;
            for (int val : A) {

                if (check(val, i))
                    count++;

                if (count == 2)
                    break;
            }

            if (count == 2) {

                res += (1 << i);
                int pos = i;

                for (int j = 0; j < A.length; j++) {

                    if (!check(A[j], pos))
                        A[j] = 0;
                }
            }
        }

        return res;
    }
}
