public class MainDigonalSum {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int solve(final int[][] A) {

        int n = A.length, i = 0, j = 0, sum = 0;

        while (i < n)
            sum += A[i++][j++];

        return sum;
    }
}
