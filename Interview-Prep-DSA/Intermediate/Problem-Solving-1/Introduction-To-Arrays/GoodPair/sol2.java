import java.util.HashSet;
import java.util.Set;

public class sol2 {

    public int solve(int[] A, int B) {

        int n = A.length;
        Set<Integer> set = new HashSet<>();

        for (int i = 0; i < n; i++) {

            int comp = B - A[i];

            if (set.contains(comp))
                return 1;

            set.add(A[i]);
        }

        return 0;
    }
}
