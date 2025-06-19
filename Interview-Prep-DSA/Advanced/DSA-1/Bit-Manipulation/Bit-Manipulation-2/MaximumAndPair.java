public class MaximumAndPair {

    private boolean checkBit(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        return false;
    }

    public int solve(int[] A) {

        int res = 0;

        for (int i = 31; i >= 0; i--) {

            int count = 0;
            for (int j = 0; j < A.length; j++) {

                if (checkBit(A[j], i))
                    count++;

                if (count == 2)
                    break;
            }

            if (count == 2) {

                res += (1 << i);
                int pos = i;

                for (int j = 0; j < A.length; j++) {

                    if (!checkBit(A[j], pos))
                        A[j] = 0;
                }
            }
        }

        return res;
    }
}
