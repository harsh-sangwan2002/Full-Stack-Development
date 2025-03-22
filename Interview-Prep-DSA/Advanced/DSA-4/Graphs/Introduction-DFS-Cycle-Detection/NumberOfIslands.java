public class NumberOfIslands {

    private static int[] rows = { -1, 0, 1, 0, -1, 1, -1, 1 };
    private static int[] cols = { 0, -1, 0, 1, -1, 1, 1, -1 };

    private void dfs(int[][] mat, int x, int y) {

        if (x < 0 || y < 0 || x >= mat.length || y >= mat[0].length || mat[x][y] == 0 || mat[x][y] == 2)
            return;

        mat[x][y] = 2;

        for (int i = 0; i < rows.length; i++) {

            int row = x + rows[i];
            int col = y + cols[i];

            dfs(mat, row, col);
        }
    }

    public int solve(int[][] A) {

        int islands = 0, n = A.length, m = A[0].length;

        for (int i = 0; i < n; i++) {

            for (int j = 0; j < m; j++) {

                if (A[i][j] == 1) {
                    dfs(A, i, j);
                    islands++;
                }
            }
        }

        return islands;
    }
}
