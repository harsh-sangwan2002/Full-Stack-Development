import java.util.HashMap;

public class SubArraySumK {

    public int solve(int[] A, int B) {

        long[] pre = new long[A.length];
        HashMap<Long, Integer> map = new HashMap<>();
        int ans = 0;
        map.put(0L, 1);

        for (int i = 0; i < A.length; i++) {

            if (i == 0)
                pre[i] = (long) A[i];

            else
                pre[i] = pre[i - 1] + A[i];
        }

        for (long val : pre) {

            long comp = val - B;

            if (map.containsKey(comp))
                ans += map.get(comp);

            map.put(val, map.getOrDefault(val, 0) + 1);
        }

        return ans;
    }
}
