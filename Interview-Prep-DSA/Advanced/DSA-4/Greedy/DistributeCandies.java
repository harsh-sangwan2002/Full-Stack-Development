import java.util.Arrays;

public class DistributeCandies {

    public int candy(int[] A) {

        int n = A.length;
        int[] candies = new int[n];
        Arrays.fill(candies, 1);

        for (int i = 1; i < n; i++) {

            if (A[i] > A[i - 1])
                candies[i] = candies[i - 1] + 1;
        }

        for (int i = n - 2; i >= 0; i--) {

            if (A[i] > A[i + 1]) {

                if (candies[i] <= candies[i + 1])
                    candies[i] = candies[i + 1] + 1;
            }
        }

        int totalCandies = 0;
        for (int val : candies)
            totalCandies += val;

        return totalCandies;
    }
}
