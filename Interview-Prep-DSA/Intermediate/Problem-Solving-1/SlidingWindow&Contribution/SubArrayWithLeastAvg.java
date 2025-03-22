public class SubArrayWithLeastAvg {

    public int solve(int[] A, int B) {

        int n = A.length, sum = 0, idx = 0;

        for (int i = 0; i < B; i++)
            sum += A[i];

        int min = sum;

        for (int i = B; i < n; i++) {

            sum -= A[i - B];
            sum += A[i];

            if (sum < min) {
                min = sum;
                idx = i - B + 1;
            }
        }

        return idx;
    }
}
