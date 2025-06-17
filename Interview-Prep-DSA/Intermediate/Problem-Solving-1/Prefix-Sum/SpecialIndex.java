public class SpecialIndex {

    public int solve(int[] A) {

        int n = A.length;
        int[] oddSum = new int[n], evenSum = new int[n];

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
                oddSum[i] = 0;

            else if (i % 2 == 0)
                oddSum[i] = oddSum[i - 1];

            else
                oddSum[i] = oddSum[i - 1] + A[i];
        }

        int count = 0;
        for (int i = 0; i < n; i++) {

            int odd = 0, even = 0;

            if (i == 0) {
                odd = oddSum[n - 1] - oddSum[i];
                even = evenSum[n - 1] - evenSum[i];
            }

            else if (i == n - 1) {
                odd = evenSum[n - 2];
                even = oddSum[n - 2];
            }

            else {
                odd = oddSum[i - 1] + (evenSum[n - 1] - evenSum[i]);
                even = evenSum[i - 1] + (oddSum[n - 1] - oddSum[i]);
            }

            if (odd == even)
                count++;
        }

        return count;
    }
}
