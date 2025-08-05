// TC -> O(N)
// SC -> O(1)
public class BuySellStock {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int maxProfit(final int[] A) {

        if (A.length == 0)
            return 0;

        int maxp = 0, min = A[0];

        for (int val : A) {

            min = Math.min(min, val);
            int currp = val - min;
            maxp = Math.max(maxp, currp);
        }

        return maxp;
    }
}
