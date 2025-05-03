public class MinorDiagonalSum {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY

    public int solve(final int[][] A) {

        int n = A.length, r = 0, c = A[0].length - 1;
        int sum = 0;

        while (r < n && c >= 0)
            sum += A[r++][c--];

        return sum;
    }
}
