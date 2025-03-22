import java.util.ArrayList;
import java.util.List;

public class MinSumPathTriangle {

    public int minimumTotal(ArrayList<ArrayList<Integer>> res) {

        int n = res.size();

        for (int i = n - 2; i >= 0; i--) {

            List<Integer> list = res.get(i);

            for (int j = list.size() - 1; j >= 0; j--) {
                int a = res.get(i + 1).get(j);
                int b = res.get(i + 1).get(j + 1);
                int min = Math.min(a, b);

                int val = res.get(i).get(j);
                res.get(i).set(j, val + min);
            }
        }

        return res.get(0).get(0);
    }
}
