import java.util.ArrayList;
import java.util.Collections;

public class LargestNumber {

    public String largestNumber(ArrayList<Integer> A) {

        Collections.sort(A, (v1, v2) -> {

            String s1 = v1 + "" + v2;
            String s2 = v2 + "" + v1;
            return s2.compareTo(s1);
        });

        StringBuilder sb = new StringBuilder();

        for (int val : A)
            sb.append(val);

        if (sb.charAt(0) == '0')
            return "0";

        return sb.toString();
    }
}
