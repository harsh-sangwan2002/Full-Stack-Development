// TC -> O(N*M)
// SC -> O(1)
public class RowSum {

    public int[] solve(int[][] A) {

        int n = A.length, m = A[0].length;
        int[] res = new int[n];

        for (int i = 0; i < n; i++) {

            int sum = 0;
            for (int j = 0; j < m; j++)
                sum += A[i][j];

            res[i] = sum;
        }

        return res;
    }
}
