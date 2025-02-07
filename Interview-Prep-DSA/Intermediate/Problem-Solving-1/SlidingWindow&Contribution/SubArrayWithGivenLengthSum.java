public class SubArrayWithGivenLengthSum {

    public int solve(int[] A, int B, int C) {

        if (B > A.length)
            return 0;

        int sum = 0, n = A.length;
        for (int i = 0; i < B; i++)
            sum += A[i];

        if (sum == C)
            return 1;

        for (int i = B; i < n; i++) {

            sum -= A[i - B];
            sum += A[i];

            if (sum == C)
                return 1;
        }

        return 0;
    }
}
