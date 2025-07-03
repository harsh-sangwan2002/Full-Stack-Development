// TC -> O(N)
// SC -> O(N)
public class SpecialIndex {

    public int solve(int[] A) {

        int n = A.length, count = 0;
        int[] evenSum = new int[n], oddSum = new int[n];

        for (int i = 0; i < n; i++) {

            if (i == 0)
                evenSum[i] = A[i];

            else if (i % 2 == 0) {
                evenSum[i] = evenSum[i - 1] + A[i];
                oddSum[i] = oddSum[i - 1];
            }

            else {
                evenSum[i] = evenSum[i - 1];
                oddSum[i] = oddSum[i - 1] + A[i];
            }
        }

        for (int i = 0; i < n; i++) {

            int even = 0, odd = 0;

            if (i == 0) {
                even = oddSum[n - 1] - oddSum[0];
                odd = evenSum[n - 1] - evenSum[0];
            }

            else {
                even = evenSum[i - 1] + (oddSum[n - 1] - oddSum[i]);
                odd = oddSum[i - 1] + (evenSum[n - 1] - evenSum[i]);
            }

            if (even == odd)
                count++;
        }

        return count;
    }
}
