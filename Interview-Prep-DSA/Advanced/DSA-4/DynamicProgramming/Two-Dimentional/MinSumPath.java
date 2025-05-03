public class MinSumPath {

    public int minPathSum(int[][] A) {

        int n = A.length, m = A[0].length;

        for (int i = n - 1; i >= 0; i--) {

            for (int j = m - 1; j >= 0; j--) {

                if (i == n - 1 && j == m - 1)
                    continue;

                else if (i == n - 1)
                    A[i][j] += A[i][j + 1];

                else if (j == m - 1)
                    A[i][j] += A[i + 1][j];

                else
                    A[i][j] += Math.min(A[i + 1][j], A[i][j + 1]);
            }
        }

        return A[0][0];
    }
}