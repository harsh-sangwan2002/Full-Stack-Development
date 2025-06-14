public class SumOfAllSubArrays {

    public long subarraySum(int[] A) {

        int n = A.length;
        long sum = 0L;

        for (int i = 0; i < n; i++) {

            long freq = (i + 1) * 1L * (n - i);
            long contri = freq * A[i];
            sum += contri;
        }

        return sum;
    }
}
