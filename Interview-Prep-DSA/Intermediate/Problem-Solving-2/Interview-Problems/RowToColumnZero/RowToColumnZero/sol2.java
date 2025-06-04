package RowToColumnZero;

public class sol2 {

    public int[][] solve(int[][] A) {

        boolean col = false, row = false;
        int n = A.length, m = A[0].length;

        for (int i = 0; i < n; i++) {
            if (A[i][0] == 0) {
                col = true;
                break;
            }
        }

        for (int j = 0; j < m; j++) {
            if (A[0][j] == 0) {
                row = true;
                break;
            }
        }

        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (A[i][j] == 0) {
                    A[0][j] = 0;
                    A[i][0] = 0;
                }
            }
        }

        for (int i = 1; i < n; i++) {
            if (A[i][0] == 0) {
                for (int j = 1; j < m; j++)
                    A[i][j] = 0;
            }
        }

        for (int j = 1; j < m; j++) {
            if (A[0][j] == 0) {
                for (int i = 1; i < n; i++)
                    A[i][j] = 0;
            }
        }

        if (row) {
            for (int j = 0; j < m; j++)
                A[0][j] = 0;
        }

        if (col) {
            for (int i = 0; i < n; i++)
                A[i][0] = 0;
        }

        return A;
    }
}