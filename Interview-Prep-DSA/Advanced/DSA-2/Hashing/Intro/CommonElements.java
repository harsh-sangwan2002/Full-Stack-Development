import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class CommonElements {
    // Do not write code to include libraries, main() function or accept any input
    // from the console.
    // Initialization code is already written and hidden from you. Do not write code
    // for it again.
    public int[] solve(int[] A, int[] B) {
        // Just write your code below to complete the function. Required input is
        // available to you as the function arguments.
        // Do not print the result or any output. Just return the result via this
        // function.
        HashMap<Integer, Integer> map = new HashMap<>();
        List<Integer> list = new ArrayList<>();

        for (int val : A)
            map.put(val, map.getOrDefault(val, 0) + 1);

        for (int val : B) {

            if (map.containsKey(val) && map.get(val) > 0) {
                list.add(val);
                map.put(val, map.get(val) - 1);
            }
        }

        int[] res = new int[list.size()];
        int idx = 0;

        for (int val : list)
            res[idx++] = val;

        return res;
    }
}
