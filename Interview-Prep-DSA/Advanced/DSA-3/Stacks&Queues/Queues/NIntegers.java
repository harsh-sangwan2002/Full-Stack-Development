import java.util.ArrayDeque;
import java.util.Queue;

public class NIntegers {

    public int[] solve(int A) {

        Queue<Integer> q = new ArrayDeque<>();
        q.add(1);
        q.add(2);
        q.add(3);
        int count = 3;
        int[] res = new int[A];
        int idx = 0;

        for (int k = 1; k <= A; k++) {

            int val = q.remove();
            res[idx++] = val;

            for (int i = 1; i <= 3; i++) {

                if (count < A) {
                    q.add(val * 10 + i);
                    count++;
                }

                else
                    break;
            }
        }

        return res;
    }
}
