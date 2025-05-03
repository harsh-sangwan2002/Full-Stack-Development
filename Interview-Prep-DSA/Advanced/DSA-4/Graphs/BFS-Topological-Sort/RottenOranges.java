import java.util.ArrayDeque;
import java.util.Queue;

public class RottenOranges {

    private int[] rows = { 0, 0, -1, 1 };
    private int[] cols = { -1, 1, 0, 0 };

    private class Pair {

        int x;
        int y;

        Pair(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

    public int solve(int[][] A) {

        int n = A.length, m = A[0].length;
        int[][] time = new int[n][m];
        Queue<Pair> q = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {

            for (int j = 0; j < m; j++) {

                if (A[i][j] == 2) {
                    time[i][j] = 0;
                    q.add(new Pair(i, j));
                }

                else
                    time[i][j] = Integer.MAX_VALUE;
            }
        }

        while (q.size() != 0) {

            Pair p = q.remove();

            for (int i = 0; i < rows.length; i++) {

                int x = p.x + rows[i];
                int y = p.y + cols[i];

                if (x >= 0 && y >= 0 && x < n && y < m && A[x][y] == 1) {
                    A[x][y] = 2;
                    time[x][y] = time[p.x][p.y] + 1;
                    q.add(new Pair(x, y));
                }
            }
        }

        int ans = -1;

        for (int i = 0; i < n; i++) {

            for (int j = 0; j < m; j++) {

                if (A[i][j] == 1 && time[i][j] == Integer.MAX_VALUE)
                    return -1;

                else if (time[i][j] != Integer.MAX_VALUE)
                    ans = Math.max(ans, time[i][j]);
            }
        }

        return ans;
    }
}
