import java.util.HashMap;

public class DistinctNumber {

    public int[] dNums(int[] A, int B) {

        HashMap<Integer, Integer> map = new HashMap<>();
        int[] res = new int[A.length - B + 1];
        int idx = 0;

        for (int i = 0; i < B; i++)
            map.put(A[i], map.getOrDefault(A[i], 0) + 1);

        res[idx++] = map.size();

        for (int i = B; i < A.length; i++) {

            int prev = A[i - B];

            if (map.get(prev) == 1)
                map.remove(prev);

            else
                map.put(prev, map.get(prev) - 1);

            map.put(A[i], map.getOrDefault(A[i], 0) + 1);
            res[idx++] = map.size();
        }

        return res;
    }
}
