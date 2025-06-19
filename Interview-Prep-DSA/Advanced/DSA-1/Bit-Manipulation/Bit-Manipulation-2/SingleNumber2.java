public class SingleNumber2 {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY

    private boolean checkBit(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        return false;
    }

    public int singleNumber(final int[] A) {

        int n = A.length, ans = 0;

        for (int i = 0; i < 32; i++) {

            int count = 0;
            for (int j = 0; j < n; j++) {

                if (checkBit(A[j], i))
                    count++;
            }

            if (count % 3 != 0)
                ans += (1 << i);
        }

        return ans;
    }
}
