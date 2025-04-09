public class MainDiagonalSum {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    
    public int solve(final int[][] A) {

        int n = A.length, m = A[0].length, i = 0, j = 0;
        int sum = 0;

        while (i < n && j < m) {
            sum += A[i][j];
            i++;
            j++;
        }

        return sum;
    }
}
