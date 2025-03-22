import java.util.ArrayDeque;
import java.util.Deque;

public class SumOfMaxMin {

    private int[] findMax(int[] A, int B) {

        if (B == 1)
            return A;

        Deque<Integer> dq = new ArrayDeque<>();
        int[] res = new int[A.length - B + 1];
        int idx = 0;

        for (int i = 0; i < B; i++) {

            while (dq.size() != 0 && A[dq.peekLast()] <= A[i])
                dq.removeLast();

            dq.addLast(i);
        }

        res[idx++] = A[dq.peekFirst()];

        for (int i = B; i < A.length; i++) {

            if (dq.peekFirst() <= i - B)
                dq.removeFirst();

            while (dq.size() != 0 && A[dq.peekLast()] <= A[i])
                dq.removeLast();

            dq.addLast(i);
            res[idx++] = A[dq.peekFirst()];
        }

        return res;
    }

    private int[] findMin(int[] A, int B) {

        if (B == 1)
            return A;

        Deque<Integer> dq = new ArrayDeque<>();
        int[] res = new int[A.length - B + 1];
        int idx = 0;

        for (int i = 0; i < B; i++) {

            while (dq.size() != 0 && A[dq.peekLast()] >= A[i])
                dq.removeLast();

            dq.addLast(i);
        }

        res[idx++] = A[dq.peekFirst()];

        for (int i = B; i < A.length; i++) {

            if (dq.peekFirst() <= i - B)
                dq.removeFirst();

            while (dq.size() != 0 && A[dq.peekLast()] >= A[i])
                dq.removeLast();

            dq.addLast(i);
            res[idx++] = A[dq.peekFirst()];
        }

        return res;
    }

    public int solve(int[] A, int B) {

        int[] min = findMin(A, B);
        int[] max = findMax(A, B);
        long sum = 0, mod = (long) (1e9 + 7);

        for (int i = 0; i < max.length; i++) {

            sum = (sum + max[i] + min[i]) % mod;
            sum = (sum + mod) % mod;
        }

        return (int) sum;
    }
}
