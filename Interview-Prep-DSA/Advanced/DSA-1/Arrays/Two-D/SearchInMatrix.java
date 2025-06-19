public class SearchInMatrix {

    public int solve(int[][] A, int B) {

        int n = A.length, ans = Integer.MAX_VALUE, r = 0, c = A[0].length - 1;

        while (r < n && c >= 0) {

            if (A[r][c] == B) {
                int curr = (r + 1) * 1009 + (c + 1);
                ans = Math.min(ans, curr);
                c--;
            }

            else if (A[r][c] < B)
                r++;

            else
                c--;
        }

        return ans == Integer.MAX_VALUE ? -1 : ans;
    }
}
