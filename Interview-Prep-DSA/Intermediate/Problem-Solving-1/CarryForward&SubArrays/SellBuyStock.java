public class SellBuyStock {

    public int maxProfit(final int[] A) {

        if (A == null || A.length == 0)
            return 0;

        int maxProfit = 0, minPrice = A[0];
        for (int val : A) {

            minPrice = Math.min(minPrice, val);
            int currProfit = val - minPrice;

            maxProfit = Math.max(maxProfit, currProfit);
        }

        return maxProfit;
    }
}
