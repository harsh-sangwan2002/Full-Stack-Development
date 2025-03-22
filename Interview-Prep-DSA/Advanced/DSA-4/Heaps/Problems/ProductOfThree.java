import java.util.PriorityQueue;

public class ProductOfThree {

    public int[] solve(int[] A) {

        PriorityQueue<Integer> pq = new PriorityQueue<>();
        int pr = 1;

        for (int i = 0; i < A.length; i++) {

            if (i < 2) {
                pq.add(A[i]);
                pr *= A[i];
                A[i] = -1;
            }

            else if (i == 2) {
                pq.add(A[i]);
                pr *= A[i];
                A[i] = pr;
            }

            else if (A[i] > pq.peek()) {
                pr /= pq.remove();
                pr *= A[i];
                pq.add(A[i]);
                A[i] = pr;
            }

            else
                A[i] = pr;
        }

        return A;
    }
}
