import java.util.HashMap;

public class CountUniqueElements {

    public int solve(int[] A) {

        HashMap<Integer, Integer> map = new HashMap<>();
        int count = 0;

        for (int val : A)
            map.put(val, map.getOrDefault(val, 0) + 1);

        for (int key : map.keySet()) {

            if (map.get(key) == 1)
                count++;
        }

        return count;
    }
}
