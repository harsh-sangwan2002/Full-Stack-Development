public class BuySellStock {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int maxProfit(final int[] A) {

        if (A.length == 0 || A == null)
            return 0;

        int currProfit = 0, maxProfit = 0, min = A[0];

        for (int val : A) {
            min = Math.min(val, min);
            currProfit = val - min;
            maxProfit = Math.max(maxProfit, currProfit);
        }

        return maxProfit;
    }
}
