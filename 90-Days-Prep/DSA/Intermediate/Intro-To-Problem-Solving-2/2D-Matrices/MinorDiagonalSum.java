// TC -> O(Max(N,M))
// SC -> O(1)
public class MinorDiagonalSum {
    
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int solve(final int[][] A) {

        int n = A.length, m = A[0].length, r = 0, c = m - 1, sum = 0;

        while (r < n && c >= 0)
            sum += A[r++][c--];

        return sum;
    }
}
