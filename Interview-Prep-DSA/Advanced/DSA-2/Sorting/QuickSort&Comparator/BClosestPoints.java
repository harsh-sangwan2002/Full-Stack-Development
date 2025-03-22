import java.util.ArrayList;
import java.util.Collections;

public class BClosestPoints {

    private int dist(int x, int y) {

        return x * x + y * y;
    }

    public ArrayList<ArrayList<Integer>> solve(ArrayList<ArrayList<Integer>> A, int B) {

        Collections.sort(A, (l1, l2) -> dist(l1.get(0), l1.get(1)) - dist(l2.get(0), l2.get(1)));

        ArrayList<ArrayList<Integer>> list = new ArrayList<>();

        for (int i = 0; i < B; i++)
            list.add(A.get(i));

        return list;

    }
}
