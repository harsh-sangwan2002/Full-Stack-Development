// TC -> O(N)
// SC -> O(N)
public class SpecialIndex {

    public int solve(int[] A) {

        int count = 0, n = A.length;
        int[] evenSum = new int[n];
        int[] oddSum = new int[n];

        for (int i = 0; i < n; i++) {

            if (i == 0)
                evenSum[i] = A[i];

            else if (i % 2 == 0)
                evenSum[i] = evenSum[i - 1] + A[i];

            else
                evenSum[i] = evenSum[i - 1];
        }

        for (int i = 0; i < n; i++) {

            if (i == 0)
                continue;

            else if (i % 2 == 0)
                oddSum[i] = oddSum[i - 1];

            else
                oddSum[i] = oddSum[i - 1] + A[i];
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
