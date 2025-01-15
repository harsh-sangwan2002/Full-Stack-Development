import java.util.ArrayList;
import java.util.Collections;

public class FactorsSort {

    private int factors(int num) {

        int count = 0;

        for (int i = 2; i <= Math.sqrt(num); i++) {

            if (num % i == 0) {

                if (i * i == num)
                    count++;

                else
                    count += 2;
            }
        }

        return count + 2;
    }

    public ArrayList<Integer> solve(ArrayList<Integer> A) {

        Collections.sort(A, (v1, v2) -> {

            int n1 = factors(v1), n2 = factors(v2);

            if (n1 < n2)
                return -1;

            else if (n1 == n2)
                return v1 - v2;

            else
                return 1;
        });

        return A;
    }
}
