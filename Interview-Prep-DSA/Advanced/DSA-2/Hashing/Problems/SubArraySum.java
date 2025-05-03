import java.util.HashMap;

public class SubArraySum {

    public int[] solve(int[] A, int B) {

        int st = -1, len = A.length;
        long[] pre = new long[A.length];

        for (int i = 0; i < A.length; i++) {

            if (i == 0)
                pre[i] = (long) A[i];

            else
                pre[i] = pre[i - 1] + A[i];

            if (pre[i] == B) {

                int[] res = new int[i + 1];

                for (int j = 0; j <= i; j++)
                    res[j] = A[j];

                return res;
            }
        }

        HashMap<Long, Integer> map = new HashMap<>();

        for (int i = 0; i < pre.length; i++) {

            long comp = pre[i] - B;

            if (map.containsKey(comp)) {
                st = map.get(comp) + 1;
                len = i - map.get(comp);
                break;
            }

            map.put(pre[i], i);
        }

        if (st == -1)
            return new int[] { -1 };

        int[] res = new int[len];

        for (int x = st; x < st + len; x++)
            res[x - st] = A[x];

        return res;
    }
}
