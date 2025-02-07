public class MinorDiagonalSum {

    public int solve(final int[][] A) {

        int r = 0, c = A[0].length - 1;
        int sum = 0;

        while (r < A.length && c >= 0)
            sum += A[r++][c--];

        return sum;
    }
}
