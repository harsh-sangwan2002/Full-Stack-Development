import java.util.HashMap;

public class sol1 {

    public int[] solve(int[] A, int B) {

        long[] pre = new long[A.length];
        HashMap<Long, Integer> map = new HashMap<>();

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

        for (int i = 0; i < pre.length; i++) {

            long val = pre[i];
            long comp = val - B;

            if (map.containsKey(comp)) {

                int st = map.get(comp) + 1;
                int et = i;
                int[] res = new int[et - st + 1];

                for (int j = st; j <= et; j++)
                    res[j - st] = A[j];

                return res;
            }

            map.put(val, i);
        }

        return new int[] { -1 };
    }
}
