import java.util.HashMap;

public class CountPairSum {

    public int solve(int[] A, int B) {

        long ans = 0, mod = (long) (1e9 + 7);
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int val : A) {

            int comp = B - val;

            if (map.containsKey(comp))
                ans = (ans + map.get(comp)) % mod;

            map.put(val, map.getOrDefault(val, 0) + 1);
        }

        return (int) ans;
    }
}
