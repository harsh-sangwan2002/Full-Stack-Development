// TC -> O(N)
// SC -> O(1)
public class SumOfAllSubarrays {

    public long subarraySum(int[] A) {

        int n = A.length;
        long ans = 0;

        for (int i = 0; i < n; i++) {

            long freq = (i + 1) * 1L * (n - i);
            long contri = freq * A[i];
            ans += contri;
        }

        return ans;
    }
}
