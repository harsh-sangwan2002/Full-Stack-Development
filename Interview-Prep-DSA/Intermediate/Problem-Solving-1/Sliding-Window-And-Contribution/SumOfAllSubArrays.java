public class SumOfAllSubArrays {

    public long subarraySum(int[] A) {

        int n = A.length;
        long ans = 0L;

        for (int i = 0; i < n; i++) {

            long freq = 1L * (i + 1) * (n - i);
            long contri = freq * A[i];
            ans += contri;
        }

        return ans;
    }
}
