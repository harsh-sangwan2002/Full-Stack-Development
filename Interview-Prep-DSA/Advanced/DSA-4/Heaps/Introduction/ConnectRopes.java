import java.util.PriorityQueue;

public class ConnectRopes {

    public int solve(int[] A) {

        if (A.length == 1)
            return A[0];

        PriorityQueue<Integer> pq = new PriorityQueue<>();
        int cost = 0;

        for (int val : A)
            pq.add(val);

        while (pq.size() > 1) {

            int a = pq.remove();
            int b = pq.remove();
            cost += (a + b);

            pq.add(a + b);
        }

        return cost;
    }
}
