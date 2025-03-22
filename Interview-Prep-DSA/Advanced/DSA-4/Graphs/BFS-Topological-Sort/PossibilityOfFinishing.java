import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Queue;

@SuppressWarnings("unchecked")
public class PossibilityOfFinishing {

    public int solve(int A, int[] B, int[] C) {

        ArrayList<Integer>[] graph = new ArrayList[A + 1];
        int[] indegree = new int[A + 1];
        Queue<Integer> q = new ArrayDeque<>();

        for (int i = 0; i < graph.length; i++)
            graph[i] = new ArrayList<>();

        for (int i = 0; i < B.length; i++) {

            int u = B[i], v = C[i];
            graph[u].add(v);
            indegree[v]++;
        }

        for (int i = 1; i <= A; i++) {

            if (indegree[i] == 0)
                q.add(i);
        }

        while (q.size() != 0) {

            int v = q.remove();

            for (int neigh : graph[v]) {

                indegree[neigh] -= 1;
                if (indegree[neigh] == 0)
                    q.add(neigh);
            }
        }

        for (int i = 1; i <= A; i++) {

            if (indegree[i] != 0)
                return 0;
        }

        return 1;
    }
}