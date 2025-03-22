public class DungeonPrincess {

    public int calculateMinimumHP(int[][] A) {

        int n = A.length, m = A[0].length;

        for (int i = n - 1; i >= 0; i--) {

            for (int j = m - 1; j >= 0; j--) {

                if (i == n - 1 && j == m - 1) {

                    if (A[i][j] > 0)
                        A[i][j] = 1;

                    else
                        A[i][j] = 1 + Math.abs(A[i][j]);
                }

                else if (i == n - 1)
                    A[i][j] = A[i][j + 1] - A[i][j];

                else if (j == m - 1)
                    A[i][j] = A[i + 1][j] - A[i][j];

                else
                    A[i][j] = Math.min(A[i + 1][j], A[i][j + 1]) - A[i][j];

                A[i][j] = Math.max(1, A[i][j]);
            }
        }

        return A[0][0];
    }
}
