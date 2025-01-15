import java.util.ArrayList;
import java.util.Collections;

public class TensDigitSorintg {

    public ArrayList<Integer> solve(ArrayList<Integer> A) {

        Collections.sort(A, (v1, v2) -> {

            int a = v1 / 10, b = v2 / 10;
            a = a % 10;
            b %= 10;

            if (a < b)
                return -1;

            else if (a == b)
                return v2 - v1;

            else
                return a - b;
        });

        return A;
    }
}
