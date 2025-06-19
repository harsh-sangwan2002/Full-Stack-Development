package FirstMissingInteger;

import java.util.HashSet;
import java.util.Set;

public class sol1 {

    public int firstMissingPositive(int[] A) {

        int n = A.length;
        Set<Integer> set = new HashSet<>();

        for (int val : A) {

            if (val > 0 && val <= n)
                set.add(val);
        }

        for (int i = 1; i <= n + 2; i++) {

            int val = i;

            if (!set.contains(val))
                return val;
        }

        return n + 2;
    }
}
