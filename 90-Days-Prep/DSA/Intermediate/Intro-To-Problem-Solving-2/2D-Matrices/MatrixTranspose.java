// TC -> O(N*M)
// SC -> O(N*M)
public class MatrixTranspose {

    public int[][] solve(int[][] A) {

        int n = A.length, m = A[0].length;
        int[][] res = new int[m][n];

        for (int i = 0; i < n; i++) {

            for (int j = 0; j < m; j++) {

                res[j][i] = A[i][j];
            }
        }

        return res;
    }
}
