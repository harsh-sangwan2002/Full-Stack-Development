public class AntiDiagonals {

    public int[][] diagonal(int[][] A) {

        int[][] res = new int[2 * A.length - 1][A.length];
        int idx = 0;

        int col = 0;
        while (col < A.length) {

            int r = 0, c = col;
            int[] temp = new int[A.length];
            int idx2 = 0;

            while (c >= 0) {
                temp[idx2++] = A[r][c];
                r++;
                c--;
            }

            res[idx++] = temp;
            col++;
        }

        int row = 1;
        while (row < A.length) {

            int r = row, c = A.length - 1;
            int[] temp = new int[A.length];
            int idx2 = 0;

            while (r < A.length) {
                temp[idx2++] = A[r][c];
                r++;
                c--;
            }

            res[idx++] = temp;
            row++;
        }

        return res;
    }
}
