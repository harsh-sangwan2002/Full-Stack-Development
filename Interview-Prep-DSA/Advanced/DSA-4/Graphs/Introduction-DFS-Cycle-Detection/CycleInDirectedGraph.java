import java.util.ArrayList;

@SuppressWarnings("unchecked")
public class CycleInDirectedGraph {

    private boolean dfs(ArrayList<Integer>[] graph, int src, boolean[] st, boolean[] vis) {

        vis[src] = true;

        for (int v : graph[src]) {

            if (st[v])
                return true;

            if (!vis[v]) {
                st[v] = true;

                boolean flag = dfs(graph, v, st, vis);
                if (flag)
                    return true;

                st[v] = false;
            }
        }

        return false;
    }

    public int solve(int A, int[][] B) {

        ArrayList<Integer>[] graph = new ArrayList[A + 1];

        for (int i = 0; i < graph.length; i++)
            graph[i] = new ArrayList<>();

        for (int i = 0; i < B.length; i++) {
            int u = B[i][0], v = B[i][1];
            graph[u].add(v);
        }

        boolean[] st = new boolean[A + 1];
        boolean[] vis = new boolean[A + 1];
        st[1] = true;

        for (int i = 1; i <= A; i++) {

            boolean flag = dfs(graph, i, st, vis);

            if (flag)
                return 1;
        }

        return 0;
    }
}
