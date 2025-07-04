// TC -> O(N)
// SC -> O(1)
public class MainDiagonalSum {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int solve(final int[][] A) {

        int r = 0, c = 0, n = A.length, sum = 0;

        while (r < n && c < n)
            sum += A[r++][c++];

        return sum;
    }
}
