// TC -> O(N)
// SC -> O(1)
public class SubarrayWithLeastAverage {

    public int solve(int[] A, int B) {

        int n = A.length, sum = 0;
        for (int i = 0; i < B; i++)
            sum += A[i];

        int leastAvg = sum, ans = 0;
        for (int i = B; i < n; i++) {

            sum -= A[i - B];
            sum += A[i];

            if (sum < leastAvg) {
                leastAvg = sum;
                ans = i - B + 1;
            }
        }

        return ans;
    }
}
