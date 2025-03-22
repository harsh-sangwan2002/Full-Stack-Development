import java.util.ArrayDeque;
import java.util.Deque;

public class SlidingWindowMaximum {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY

    public int[] slidingMaximum(final int[] A, int B) {

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
}
