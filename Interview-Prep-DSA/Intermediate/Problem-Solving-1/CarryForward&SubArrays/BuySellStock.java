public class BuySellStock {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int maxProfit(final int[] A) {

        int maxProfit = 0, min = Integer.MAX_VALUE;

        for (int val : A) {

            min = Math.min(min, val);
            int currProfit = val - min;
            maxProfit = Math.max(maxProfit, currProfit);
        }

        return maxProfit;
    }
}
