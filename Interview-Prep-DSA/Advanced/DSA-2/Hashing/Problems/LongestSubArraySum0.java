import java.util.HashMap;

public class LongestSubArraySum0 {

    public int solve(int[] A) {

        HashMap<Long, Integer> map = new HashMap<>();
        long[] pre = new long[A.length];
        int ans = 0;

        for (int i = 0; i < A.length; i++) {

            if (i == 0)
                pre[i] = (long) A[i];

            else
                pre[i] = pre[i - 1] + A[i];

            if (pre[i] == 0)
                ans = i + 1;
        }

        for (int i = 0; i < pre.length; i++) {

            long val = pre[i];

            if (map.containsKey(val))
                ans = Math.max(ans, i - map.get(val));

            else
                map.put(val, i);
        }

        return ans;
    }
}
