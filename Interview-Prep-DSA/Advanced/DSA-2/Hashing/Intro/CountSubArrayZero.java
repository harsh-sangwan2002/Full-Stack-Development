import java.util.HashMap;

public class CountSubArrayZero {

    public int solve(int[] A) {

        HashMap<Long, Integer> map = new HashMap<>();
        long[] pre = new long[A.length];

        for (int i = 0; i < A.length; i++) {

            if (i == 0)
                pre[i] = (long) (A[i]);

            else
                pre[i] = pre[i - 1] + A[i];
        }

        map.put(0L, 1);
        long ans = 0, mod = (long) (1e9 + 7);

        for (long val : pre) {

            if (map.containsKey(val))
                ans = (ans + map.get(val)) % mod;

            map.put(val, map.getOrDefault(val, 0) + 1);
        }

        return (int) ans;
    }
}
