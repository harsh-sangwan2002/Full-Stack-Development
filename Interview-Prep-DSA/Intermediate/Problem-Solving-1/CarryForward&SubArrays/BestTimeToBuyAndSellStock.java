public class BestTimeToBuyAndSellStock {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int maxProfit(final int[] A) {

        if (A.length == 0)
            return 0;

        int maxProfit = 0, min = A[0];

        for (int val : A) {

            min = Math.min(min, val);
            int currProfit = val - min;
            maxProfit = Math.max(maxProfit, currProfit);
        }

        return maxProfit;
    }
}
