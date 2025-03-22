import java.util.HashMap;

public class CountPairDiff {

    public int solve(int[] A, int B) {

        HashMap<Integer, Integer> map = new HashMap<>();
        long ans = 0, mod = (long) (1e9 + 7);

        for (int val : A)
            map.put(val, map.getOrDefault(val, 0) + 1);

        for (int val : A) {

            int comp = val - B;

            if (map.containsKey(comp))
                ans = (ans + map.get(comp)) % mod;
        }

        return (int) ans;
    }
}
