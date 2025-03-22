import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

@SuppressWarnings("unchecked")
public class DijkstraAlgo {

    private class Edge {

        int dest;
        int weight;

        public Edge(int dest, int weight) {
            this.dest = dest;
            this.weight = weight;
        }
    }

    public class Pair {

        int vertex;
        int dist;

        public Pair(int vertex, int dist) {
            this.vertex = vertex;
            this.dist = dist;
        }
    }

    public int[] solve(int A, int[][] B, int C) {

        if (B.length == 0)
            return new int[A];

        ArrayList<Edge>[] graph = new ArrayList[A];
        for (int i = 0; i < A; i++)
            graph[i] = new ArrayList<>();

        for (int i = 0; i < B.length; i++) {
            int u = B[i][0], v = B[i][1], weight = B[i][2];
            graph[u].add(new Edge(v, weight));
            graph[v].add(new Edge(u, weight));
        }

        int[] res = new int[A];
        Arrays.fill(res, Integer.MAX_VALUE);
        PriorityQueue<Pair> pq = new PriorityQueue<>(Comparator.comparingInt(p -> p.dist));

        res[C] = 0;
        pq.add(new Pair(C, 0));

        while (!pq.isEmpty()) {
            Pair pair = pq.remove();
            int vertex = pair.vertex, dist = pair.dist;

            if (dist > res[vertex])
                continue;

            for (Edge edge : graph[vertex]) {
                int neigh = edge.dest, newDist = dist + edge.weight;
                if (newDist < res[neigh]) {
                    res[neigh] = newDist;
                    pq.add(new Pair(neigh, newDist));
                }
            }
        }

        for (int i = 0; i < res.length; i++) {
            if (res[i] == Integer.MAX_VALUE)
                res[i] = -1;
        }

        return res;
    }
}