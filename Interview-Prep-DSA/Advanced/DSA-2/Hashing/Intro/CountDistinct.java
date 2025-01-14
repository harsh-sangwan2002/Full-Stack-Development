import java.util.HashSet;
import java.util.Set;

public class CountDistinct {

    public int solve(int[] A) {

        Set<Integer> set = new HashSet<>();

        for (int val : A)
            set.add(val);

        return set.size();
    }
}
