import java.util.HashMap;

public class CountDivisors {

    private int findMax(int[] arr) {

        int max = arr[0];

        for (int val : arr)
            max = Math.max(val, max);

        return max;
    }

    public int[] solve(int[] A) {

        int[] res = new int[A.length];
        int max = findMax(A);
        int[] spf = new int[max + 1];

        for (int i = 0; i < spf.length; i++)
            spf[i] = i;

        for (int i = 2; i <= Math.sqrt(max); i++) {

            if (spf[i] == i) {

                for (int j = i * i; j <= max; j += i) {
                    spf[j] = i;
                }
            }
        }

        for (int i = 0; i < A.length; i++) {
            int val = A[i];
            HashMap<Integer, Integer> map = new HashMap<>();

            while (val != 1) {
                map.put(spf[val], map.getOrDefault(spf[val], 0) + 1);
                val /= spf[val];
            }

            int ans = 1;
            for (int key : map.keySet()) {
                int freq = map.get(key) + 1;
                ans *= freq;
            }

            res[i] = ans;
        }

        return res;
    }
}