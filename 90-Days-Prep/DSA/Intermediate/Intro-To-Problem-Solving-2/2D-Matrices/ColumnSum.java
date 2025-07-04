// TC -> O(N*M)
// SC -> O(1)
public class ColumnSum {

    public int[] solve(int[][] A) {

        int n = A.length, m = A[0].length;
        int[] res = new int[m];

        for (int j = 0; j < m; j++) {

            int sum = 0;
            for (int i = 0; i < n; i++)
                sum += A[i][j];

            res[j] = sum;
        }

        return res;
    }
}
