public class MinorDiagonalSum {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int solve(final int[][] A) {

        int n = A.length, sum = 0, r = 0, c = n - 1;

        while (r < n && c >= 0)
            sum += A[r++][c--];

        return sum;
    }
}
