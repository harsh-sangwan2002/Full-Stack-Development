public class RowWithMaxOnes {

    public int solve(int[][] A) {

        int ans = 0, n = A.length, r = 0, c = n - 1;

        while (r < n && c >= 0) {

            while (c >= 0 && A[r][c] == 1) {
                ans = r;
                c--;
            }

            r++;
        }

        return ans;
    }
}
