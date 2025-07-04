// TC -> O(N*N)
// SC -> O(N*N)
public class AntiDiagonals {

    public int[][] diagonal(int[][] A) {

        int n = A.length;
        int[][] res = new int[2 * n - 1][n];
        int idx1 = 0, col = 0;

        while (col < n) {

            int r = 0, c = col, idx2 = 0;
            int[] temp = new int[n];

            while (r < n && c >= 0)
                temp[idx2++] = A[r++][c--];

            res[idx1++] = temp;
            col++;
        }

        int row = 1;
        while (row < n) {

            int r = row, c = n - 1, idx2 = 0;
            int[] temp = new int[n];

            while (r < n && c >= 0)
                temp[idx2++] = A[r++][c--];

            res[idx1++] = temp;
            row++;
        }

        return res;
    }
}
