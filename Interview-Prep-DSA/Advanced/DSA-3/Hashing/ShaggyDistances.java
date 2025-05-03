import java.util.HashMap;

public class ShaggyDistances {

    public int solve(int[] A) {

        HashMap<Integer, Integer> map = new HashMap<>();
        int diff = Integer.MAX_VALUE;

        for (int i = 0; i < A.length; i++) {

            int val = A[i];

            if (map.containsKey(val))
                diff = Math.min(diff, i - map.get(val));

            map.put(val, i);
        }

        return diff == Integer.MAX_VALUE ? -1 : diff;
    }
}
