import java.util.ArrayList;
import java.util.PriorityQueue;
import java.util.Queue;

@SuppressWarnings("unchecked")
public class TopologicalSort {

    public int[] solve(int A, int[][] B) {

        ArrayList<Integer>[] graph = new ArrayList[A + 1];
        int[] indegree = new int[A + 1];

        for (int i = 1; i <= A; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int i = 0; i < B.length; i++) {
            int u = B[i][0], v = B[i][1];
            graph[u].add(v);
            indegree[v]++;
        }

        Queue<Integer> q = new PriorityQueue<>();
        for (int i = 1; i <= A; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }

        int[] res = new int[A];
        int idx = 0;

        while (!q.isEmpty()) {
            int u = q.poll();
            res[idx++] = u;

            for (int neigh : graph[u]) {
                indegree[neigh]--;

                if (indegree[neigh] == 0) {
                    q.add(neigh);
                }
            }
        }

        if (idx != A) {
            return new int[0];
        }

        return res;
    }
}