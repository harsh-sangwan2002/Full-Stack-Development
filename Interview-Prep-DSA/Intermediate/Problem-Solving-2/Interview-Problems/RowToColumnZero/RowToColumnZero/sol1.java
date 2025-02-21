package RowToColumnZero;

public class sol1 {

    public int[][] solve(int[][] A) {

        int n = A.length, m = A[0].length;

        for (int i = 0; i < n; i++) {

            boolean flag = false;

            for (int j = 0; j < m; j++) {

                if (A[i][j] == 0) {
                    flag = true;
                    break;
                }
            }

            if (flag) {
                for (int j = 0; j < m; j++)
                    A[i][j] *= -1;
            }
        }

        for (int j = 0; j < m; j++) {

            boolean flag = false;

            for (int i = 0; i < n; i++) {

                if (A[i][j] == 0) {
                    flag = true;
                    break;
                }
            }

            if (flag) {
                for (int i = 0; i < n; i++)
                    A[i][j] = 0;
            }
        }

        for (int i = 0; i < n; i++) {

            boolean flag = false;

            for (int j = 0; j < m; j++) {

                if (A[i][j] < 0) {
                    flag = true;
                    break;
                }
            }

            if (flag) {
                for (int j = 0; j < m; j++)
                    A[i][j] = 0;
            }
        }

        return A;
    }
}