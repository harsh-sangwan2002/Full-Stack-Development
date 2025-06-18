import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ColorfulNumber {

    private void reverseList(List<Integer> list) {

        int lo = 0, hi = list.size() - 1;

        while (lo < hi) {
            int temp = list.get(lo);
            list.set(lo, list.get(hi));
            list.set(hi, temp);

            lo++;
            hi--;
        }
    }

    public int colorful(int A) {

        List<Integer> list = new ArrayList<>();

        while (A != 0) {
            int lastDigit = A % 10;
            A /= 10;
            list.add(lastDigit);
        }

        reverseList(list);
        Set<Integer> set = new HashSet<>();

        for (int i = 0; i < list.size(); i++) {

            int pr = 1;

            for (int j = i; j < list.size(); j++) {
                pr *= list.get(j);

                if (set.contains(pr))
                    return 0;

                set.add(pr);
            }
        }

        return 1;
    }
}
