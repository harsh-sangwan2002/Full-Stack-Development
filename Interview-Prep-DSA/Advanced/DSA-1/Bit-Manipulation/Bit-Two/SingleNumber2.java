public class SingleNumber2 {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    private boolean check(int n, int pos) {

        if ((n & (1 << pos)) != 0)
            return true;

        else
            return false;
    }

    public int singleNumber(final int[] A) {

        int ans = 0;

        for (int i = 0; i < 32; i++) {
            int count = 0;

            for (int j = 0; j < A.length; j++) {

                if (check(A[j], i))
                    count++;
            }

            if (count % 3 != 0)
                ans += (1 << i);
        }

        return ans;
    }
}
