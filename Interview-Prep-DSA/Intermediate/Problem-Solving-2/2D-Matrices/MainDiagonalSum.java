public class MainDiagonalSum {

    public int solve(final int[][] A) {

        int r = 0, c = 0, n = A.length, m = A[0].length, sum = 0;

        while (r < n && c < m) {
            sum += A[r][c];
            r++;
            c++;
        }

        return sum;
    }
}
