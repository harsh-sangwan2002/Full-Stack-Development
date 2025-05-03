import java.util.ArrayList;
import java.util.List;

public class AllPrimes {

    public int[] solve(int A) {

        List<Integer> list = new ArrayList<>();
        boolean[] primes = new boolean[A + 1];

        for (int i = 2; i <= Math.sqrt(A); i++) {

            if (primes[i] == false) {

                for (int j = i * i; j <= A; j += i)
                    primes[j] = true;
            }
        }

        for (int i = 2; i < primes.length; i++) {

            if (primes[i] == false)
                list.add(i);
        }

        int[] res = new int[list.size()];
        int idx = 0;

        for (int val : list)
            res[idx++] = val;

        return res;
    }
}
